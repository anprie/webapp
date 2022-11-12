from flask import Flask, redirect, url_for, request, render_template
from markupsafe import escape
import sys
sys.path.insert(0, '/home/antonia/repositories/anagram2/')
import os
workdir = os.path.abspath( os.path.dirname( __file__ ) )

from anagram import Anagram

app = Flask(__name__)#, template_folder='templates' )


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/anagram/<word>,<language>,<results>/')
def anagram(word, language, results):
    return render_template('anagram.html', results=results, word=word, language=language)

@app.route('/form', methods=['POST', 'GET'])
def form():
    if request.method == 'POST':
        word = escape(request.form['word'])
        language = escape(request.form['language'])
        results = Anagram.process(word, workdir +'/../anagram2/'+ language)
        return redirect(url_for('anagram', word=word, language=language, results=results))
    else:
        return render_template('form.html')

with app.test_request_context():
    print(url_for('form'))
    print(url_for('anagram', word='foo', language='bar', results='testtest'))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
