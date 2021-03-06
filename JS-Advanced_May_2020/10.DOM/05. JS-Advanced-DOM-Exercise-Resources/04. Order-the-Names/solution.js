function solve() {
    document.querySelector('button').addEventListener('click',onClick)
    const list = {}

    const items = document.querySelector('ol').querySelectorAll('li');
    [...items].forEach(e => {
        if(e.textContent.trim().length == 0 ){
            return ;
        }
        const letter = e.textContent[0].toUpperCase();
        list[letter] = e.textContent;
    });

    function onClick(){
        const input = document.querySelector('input');
        // const value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        const value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
        
        // A B C D E
        const letter = value[0].toUpperCase(); 

        if(list.hasOwnProperty(letter) === false ){
            list[letter] = value;
        }else{
            list[letter] = list[letter] + ", " + value;
        }

        const index = letter.charCodeAt(0) - 65;
        items[index].textContent = list[letter];

        input.value = '';
    }
}