const changeTextOnClick = (changeTextId, chapterTitles, texts) => {
    let index = 0;

    document.getElementById(changeTextId).addEventListener('click', () => {
        document.getElementById('chapter').textContent = `${chapterTitles[index]}`;
        document.getElementById('text').textContent = texts[index];
        index = (index + 1) % texts.length;
    });
};

export default changeTextOnClick;

