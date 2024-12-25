class TextAnalyzer {
    constructor() {
        this.text = '';
    }

    setText(newText) {
        this.text = newText.trim();
    }

    getWordCount() {
        if (!this.text) return 0;
        return this.text.split(/\s+/).filter(word => word.length > 0).length;
    }

    getCharacterCount(includeSpaces = false) {
        return includeSpaces ? this.text.length : this.text.replace(/\s/g, '').length;
    }

}