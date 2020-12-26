var counter = 0;
var bool = [];
function test(nummer) {
    switch(nummer) {
        case 1:
             if(bool[nummer] === 99) {
                 console.log("Nö");
                 return;
             }
            console.log(bool[nummer])
            var newItem1 = document.createElement("a");
            var textnode = document.createTextNode("CSS Positionierung Teil 1   ");
            newItem1.setAttribute('href', "Uebung2/zweiPunktEins.html")
            newItem1.appendChild(textnode);

            var newItem2 = document.createElement("a");
            var textnode = document.createTextNode("CSS Positionierung Teil 2     ");
            newItem2.setAttribute('href', "Uebung2/zweiPunktZwei.html")
            newItem2.appendChild(textnode);

            var newItem3 = document.createElement("a");
            var textnode = document.createTextNode("Wireframe with HTML and CSS");
            newItem3.setAttribute('href', "Uebung2/zweiPunktDrei.html")
            newItem3.appendChild(textnode);

            var breaker = document.createElement("br");

            var list = document.getElementById("div" + nummer);
            list.appendChild(newItem1);
            list.appendChild(document.createElement("br"))
            list.appendChild(newItem2);
            list.appendChild(document.createElement("br"))
            list.appendChild(newItem3);

            //console.log("Oranges are $0.59 a pound.");
            counter = 0;
            bool[nummer] = 99;
            break;
        

        case 2:
            if(bool[nummer] === 99) {
                console.log("Nö");
                return;
            }
           console.log(bool[nummer])
           var newItem1 = document.createElement("a");
           var textnode = document.createTextNode("CSS Positionierung Teil 1   ");
           newItem1.setAttribute('href', "Uebung2/zweiPunktEins.html")
           newItem1.appendChild(textnode);

           var newItem2 = document.createElement("a");
           var textnode = document.createTextNode("CSS Positionierung Teil 2     ");
           newItem2.setAttribute('href', "Uebung2/zweiPunktZwei.html")
           newItem2.appendChild(textnode);

           var newItem3 = document.createElement("a");
           var textnode = document.createTextNode("Wireframe with HTML and CSS");
           newItem3.setAttribute('href', "Uebung2/zweiPunktDrei.html")
           newItem3.appendChild(textnode);

           var breaker = document.createElement("br");

           var list = document.getElementById("div" + nummer);
           list.appendChild(newItem1);
           list.appendChild(document.createElement("br"))
           list.appendChild(newItem2);
           list.appendChild(document.createElement("br"))
           list.appendChild(newItem3);

           //console.log("Oranges are $0.59 a pound.");
           counter = 0;
           bool[nummer] = 99;
           break;
        default:
            break;
    }
}