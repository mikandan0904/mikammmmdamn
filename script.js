const monsters = [
    {
        name: "ジバニャン",
        image: "https://example.com/ji-ba-nyan.png",
        description: "ジバニャンは、猫の妖怪で、いたずら好きで元気な性格。"
    },
    {
        name: "コマさん",
        image: "https://example.com/ko-ma-san.png",
        description: "コマさんは、おっとりとした性格の犬の妖怪。"
    },
    {
        name: "ウィスパー",
        image: "https://example.com/wi-su-pa.png",
        description: "ウィスパーは、白い幽霊の妖怪で、忠実な性格をしている。"
    }

 ];

const searchInput = document.getElementById("search");
const randomButton = document.getElementById("randomButton");
const monsterName = document.getElementById("monsterName");
const monsterImage = document.getElementById("monsterImage");
const monsterDescription = document.getElementById("monsterDescription");

function displayRandomMonster() {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    const monster = monsters[randomIndex];

    monsterName.textContent = monster.name;
    monsterImage.src = monster.image;
    monsterDescription.textContent = monster.description;
}
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText));

    if (filteredMonsters.length > 0) {
       const monster = filteredMonsters[0];
monsterName.textContent = monster.name;
        monsterImage.src = monster.image;
        monsterDescription.textContent = monster.description;
    }
});
randomButton.addEventListener("click", displayRandomMonster);
displayRandomMonster();
