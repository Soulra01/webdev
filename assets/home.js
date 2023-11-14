// import { Client } from '@notionhq/client';

const { Client } = require('@notionhq/client');

const token = 'secret_xB0302SWmTgRnA8KvkX3JlmKmqGjdFNwRd1aNnfKC21';

const notion = new Client({ auth: token });

const data = [];

async function getTextEntry() {
    const databaseId = '4a101f160ae04fca87b89bd66a10f4f5';
    const response = await notion.databases.query({ database_id: databaseId, limit: 1 });

    const results = response.results;

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            const textEntry = results[i].properties.Text.rich_text[0].plain_text;
            const diaryDate = results[i].properties.Date.date.start;
            console.log(`Text Entry: ${textEntry}`);
            console.log(`Diary Date: ${diaryDate}`);

            // Use push() to add an object to the 'data' array
            data.push({ tanggal: diaryDate, entry: textEntry });
        }
    } else {
        console.log("No entries found in the database.");
    }

    // Return the 'data' array after the loop
    return data;
}

getTextEntry().then(function (result) {
    console.log(result);
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

document.addEventListener('DOMContentLoaded', function () {
    dispdiary();
});