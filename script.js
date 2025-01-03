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


    getSentenceCount() {
        if (!this.text) return 0;
        return this.text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    }

    getReadingTime() {
        // Average reading speed: 200 words per minute
        const wordsPerMinute = 200;
        const minutes = this.getWordCount() / wordsPerMinute;
        return Math.ceil(minutes * 60); // Returns seconds
    }

    getMostFrequentWords(limit = 5) {
        if (!this.text) return [];

        const words = this.text.toLowerCase()
            .replace(/[.,!?]/g, '')
            .split(/\s+/)
            .filter(word => word.length > 0);

        const frequency = {};
        words.forEach(word => {
            frequency[word] = (frequency[word] || 0) + 1;
        });

        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([word, count]) => ({ word, count }));
    }
}
// Example usage:
const analyzer = new TextAnalyzer();
const sampleText = `JavaScript is a powerful programming language. 
                   It is widely used for web development. 
                   Developers love JavaScript because it's versatile and fun to use!`;

analyzer.setText(sampleText);

console.log('Word Count:', analyzer.getWordCount());
console.log('Character Count (with spaces):', analyzer.getCharacterCount(true));
console.log('Character Count (without spaces):', analyzer.getCharacterCount(false));
console.log('Sentence Count:', analyzer.getSentenceCount());
console.log('Reading Time (seconds):', analyzer.getReadingTime());
console.log('Most Frequent Words:', analyzer.getMostFrequentWords(3));
