from flask import Flask, redirect, url_for, request, render_template
from markupsafe import escape
import sys
#sys.path.insert(0, '/home/antonia/repositories/anagram2/')
#import os
#workdir = os.path.abspath( os.path.dirname( __file__ ) )

from anagram import Anagram

app = Flask(__name__)#, template_folder='templates' )


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/anagram/results/<word>_<language>_<results>/')
def results(word, language, results):
    #results = results.split("0")
    return render_template('results.html', results=results, word=word, language=language)

@app.route('/anagram', methods=['POST', 'GET'])
def anagram():
    if request.method == 'POST':
        word = escape(request.form['word'])
        language = escape(request.form['language'])
        #results = Anagram.process(word, workdir +'/../anagram2/'+ language)
        results = Anagram.process(word, language)
        results = "0".join(sorted(results))
        return redirect(url_for('results', word=word, language=language, results=results))
    else:
        return render_template('form.html')

@app.route('/anagram/results/<word>_<language>_<results>/pick/')
def pick(word, language, results):
    print("results: ", results)
    return render_template('pick.html', word=word, language=language, results=results)

@app.route('/anagram/results/<word>_<language>_<results>/pick/rearrange/<anagram>/')
def rearrange(word, language, results, anagram):
    anagram = anagram.split("-")
    return render_template('rearrange.html', word=word, language=language, results=results, anagram=anagram)

with app.test_request_context():
    print(url_for('anagram'))
    print(url_for('results', word='foo', language='bar', results='test0test'))
    #print(url_for('pick',  results='testtest\nbaz'))


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
