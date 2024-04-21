from flask import Flask, request, jsonify
from PIL import Image
import io
import textwrap
import google.generativeai as genai

app = Flask(__name__)

# Configure the Google API
genai.configure(api_key="AIzaSyAHB8fva0oJVkCPPwBUwUp6t3fVyX_Yxo0")

@app.route('/process-image', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']
    image = Image.open(image_file.stream)

    # Use the Generative AI model
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content(["Explain whats in this image and its history", image], stream=True)
    response.resolve()

    # Convert response to Markdown
    markdown_response = textwrap.indent(response.text.replace('•', '  *'), '> ', lambda _: True)
    
    return jsonify({'response': markdown_response})

if __name__ == '__main__':
    app.run()
