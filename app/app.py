from flask import Flask, redirect, url_for, request, render_template
from markupsafe import escape
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/anagram/results/<word>_<language>_<results>/')
def results(word, language, results):
    return render_template('results.html', results=escape(results), word=escape(word), language=escape(language))

@app.route('/anagram', methods=['GET'])
def anagram():
    return render_template('form.html')

@app.route('/anagram', methods=['POST'])
def anagram():
    word = escape(request.form['word'])
    language = escape(request.form['language'])
    results = requests.get(f'http://anagram.solver/{word}_{language}/').content
    results = "0".join(results)
    return redirect(url_for('results', word=word, language=language, results=results))

@app.route('/anagram/results/rearrange/<anagram>/')
def rearrange(anagram):
    return render_template('rearrange.html', anagram=escape(anagram))

with app.test_request_context():
    print(url_for('anagram'))
    print(url_for('results', word='foo', language='bar', results='test0test'))
    print(url_for('rearrange', anagram='bar-baz'))


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
