import data from './data.json' assert { type: 'json' };

data.forEach(diary => {
    console.log(diary.tanggal);
    console.log(diary.entry);
});

function dispdiary() {
    const diaryEntriesDiv = document.getElementById('diaryEntries');
    data.forEach(diary => {
        const tanggalDiv = document.createElement('div');
        tanggalDiv.classList.add('tanggal-diary');
        tanggalDiv.innerHTML = `<h2>${diary.tanggal}</h2>`;

        const entryDiv = document.createElement('div');
        entryDiv.classList.add('diary-entry');
        entryDiv.innerHTML = `<p>${diary.entry}</p>`;

        const hrnya = document.createElement('hr');
        const entrycontainer = document.createElement('div');
        entrycontainer.classList.add('entry-container');
        // entrycontainer.innerHTML = '<hr>';
        entrycontainer.appendChild(tanggalDiv);
        entrycontainer.appendChild(entryDiv);
        diaryEntriesDiv.appendChild(entrycontainer);
        diaryEntriesDiv.appendChild(hrnya);
    });
}

dispdiary();

// function displayDiaryEntries() {
//     const diaryEntriesDiv = document.getElementById('diaryEntries');
//     data.then(d =>
//         d.default.forEach(diary => {


//             const tanggalDiv = document.createElement('div');
//             tanggalDiv.classList.add('tanggal-diary');
//             tanggalDiv.innerHTML = `<h2>${diary.tanggal}</h2>`;

//             const entryDiv = document.createElement('div');
//             entryDiv.classList.add('diary-entry');
//             entryDiv.innerHTML = `<p>${diary.entry}</p>`;

//             const hrnya = document.createElement('hr');
//             const entrycontainer = document.createElement('div');
//             entrycontainer.classList.add('entry-container');
//             // entrycontainer.innerHTML = '<hr>';
//             entrycontainer.appendChild(tanggalDiv);
//             entrycontainer.appendChild(entryDiv);
//             diaryEntriesDiv.appendChild(entrycontainer);
//             diaryEntriesDiv.appendChild(hrnya);
//         }
//         )
//     );
// }


// displayDiaryEntries();

