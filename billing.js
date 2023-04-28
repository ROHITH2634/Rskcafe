document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/09/52/e9/0952e9d8c44d9e1fcc1e9b6da06ca49c.jpg)";
document.body.style.color = "white";
var amountss =[]
var names = []
var count =[]
function main_menu(){

    let m_opt = prompt(" RSK CAFE MENU \n 1. DRINKS \n 2 .BURGERS \n 3. PASTA \n 4. PIZZA \n 5. ICE CREAMS \n 6. SHAKES")
        if(m_opt == "1"){
            drinks();
        }
        else if(m_opt == "2"){
            burgers();
        }
        else if(m_opt == "3"){
            pasta();
        }
        else if(m_opt == "4"){
            pizzas();
        }
        else if(m_opt == "5"){
            ice_cremas();
        }
        else if(m_opt == "6"){
            shakes();
        }
        else{// original
            rel();
        }
}
function drinks(){   
    drin = prompt("DRINKS\n 1. HOT CHOCOLATE  250Rs\n 2. ESPRESSO  200Rs\n 3. LATTE 200Rs\n 4. MOCHA  250Rs\n 5. CAPPUCINO  300Rs\n 6.GO BACK\n 7. EXIT")    
   
    if(drin>=1 && drin<=5){
     drinks_again()
    }    
    else
    {
        if(drin =="6"){
            main_menu()
        }
        else if(drin =="7"){
            thank_you()
        }
        else{
            prompt("try again")
            drinks()
        }
    }
    
}
function drinks_again(){
    drin_count = prompt("HOW MANY PORTIONS DO U WANT")
    if(drin_count>0 && drin_count<=20){
        if(drin == "1")
    {
    drin_tot = drin_count*250
    amount(drin_tot,"HOT CHOCOLATE",drin_count)
    }
    else if(drin == "2")
    {
    drin_tot = drin_count*200
    amount(drin_tot,"ESPRESSO",drin_count)
    }
    else if(drin=="3")
    {
    drin_tot = drin_count*200
    amount(drin_tot,"LATTE",drin_count)
    }
    else if(drin=="4")
    {
    drin_tot = drin_count*250
    amount(drin_tot,"MOCHA",drin_count)
    }
    else if(drin=="5"){
    drin_tot = drin_count*300
    amount(drin_tot,"CAPPUCINO",drin_count)
    }   
    }
    else{
        prompt("Sorry Invalid Input")
        drinks_again();
    }  
}


function burgers(){
    burg = prompt("BURGER MENU\n  1. CRISPY CHICKEN BURGER  300Rs\n  2. AALO TIKKI BURGER  250Rs\n  3. LAMB BURGER  250Rs\n  4. POTOBELLO MUSHROOM BURGER  250Rs\n  5. VEG BURGER  200Rs\n  6. GO BACK\n  7. EXIT")
    if(burg<=5 && burg>=1)
    {
        burgers_again();
    }
    else{
        if(burg =="6"){
            main_menu()
        }
        else if(burg =="7"){
            thank_you()
        }
        else{
            prompt("Try again")
            burgers()
        }
    }   
    
} 
function burgers_again(){
    burg_count = prompt("HOW MANY PORTIONS DO U WANT")
    if(burg_count>0 && burg_count<=20){
        if(burg == "1")
    {
        burg_tot = burg_count*300
        amount(burg_tot,"CRISPY CHICKEN BURGER",burg_count)
    }
    else if(burg == "2")
    {
         burg_tot = burg_count*250
        amount(burg_tot,"AALO TIKKI BURGER",burg_count)
    }
    else if(burg=="3")
    {
        burg_tot =  burg_count*250
        amount(burg_tot,"LAMB BURGER",burg_count)
    }
    else if(burg=="4")
    {
        burg_tot = burg_count*200
        amount(burg_tot,"PORTOBELLO MUSHROOM BURGER",burg_count)
    }
    else if(burg=="5"){
        burg_tot = burg_count*200
        amount(burg_tot,"VEG BURGER",burg_count)
    }
    }    
    else{
        prompt("Sorry Invalid Input")
        burgers_again();
    } 
}

function pasta(){
    past = prompt("PASTA MENU \n 1. PENNE ALFREDO  300Rs \n 2. SPHAGETTI CARBONARA  250Rs\n 3. CHICKEN SPHAGETTI ALFREDO  250Rs \n 4. PENNE ARRABIATA  250Rs \n 5. BASIL PESTO PENNE  300Rs \n  6. GO BACK \n 7. EXIT")   
    if(past<=5 && past>=1)
    {
       pasta_again();
    }
    else{
        if(past =="6"){
            main_menu()
        }
        else if(past =="7"){
            thank_you()
        }
        else{
            prompt("Try again")
            pasta()
        }
    } 
}
function pasta_again(){
    past_count = prompt("HOW MANY PORTIONS DO U WANT")
    if(past_count>0 && past_count<=20){
        if(past == "1")
        {
            past_tot = past_count*300
            amount(past_tot,"PENNE ALFREDO",past_count)
        }
        else if(past == "2")
        {
            past_tot = past_count*250
            amount(past_tot,"SPHAGETTI CARBONARA",past_count)
        }
        else if(past=="3")
        {
            past_tot =  past_count*250
            amount(past_tot,"CHICKEN SPHAGETTI ALFREDO",past_count)
        }
        else if(past=="4")
        {
            past_tot = past_count*250
            amount(past_tot,"PENNE ARRABIATA",past_count)
        }
        else if(past=="5"){
            past_tot = past_count*300
            amount(past_tot,"BASIL PESTO PENNE",past_count)
        }
    }   
    else{
        prompt("Sorry Invalid Input")
        pasta_again();
    } 
}
function pizzas(){
    pizz = prompt("PIZZA MENU\n 1. CLASSIC MARGHARITHA	450Rs\n2. PEPPERONI PIZZA	550Rs\n 3. TRUFFLE FUNGHI	450Rs\n 4. BABY CORN PIZZA  400Rs\n 5.CHEESE LOADED PIZZA	500Rs\n 6. GO BACK\n 7. EXIT")
    if(pizz<=5 && pizz>=1)
    {
       pizza_again()
    }   
    else{
        if(pizz =="6"){
            main_menu()
        }
        else if(pizz =="7"){
            thank_you()
        }
        else{
            prompt("Try again")
            pizzas()
        }
    } 
}
function pizza_again(){
    pizz_count = prompt("HOW MANY PORTIONS DO U WANT")
    if(pizz_count>0 && pizz_count<=20){
        if(pizz == "1")
        {
            pizz_tot = pizz_count*450
            amount(pizz_tot,"CLASSIC MARGHARITA",pizz_count)
        }
        else if(pizz == "2")
        {
            pizz_tot = pizz_count*550
            amount(pizz_tot,"PEPPERONI PIZZA",pizz_count)
        }
        else if(pizz=="3")
        {
            pizz_tot =  pizz_count*450
            amount(pizz_tot,"TRUFFLE FUNGHI",pizz_count)
        }
        else if(pizz=="4")
        {
            pizz_tot = pizz_count*400
            amount(past_tot,"BABY CORN PIZZA",past_count)
        }
        else if(pizz=="5"){
            pizz_tot = pizz_count*500
            amount(pizz_tot,"CHEESE LOADED PIZZA",pizz_count)
        }
    }
    else{
        prompt("Sorry Invalid Input")
        pizza_again();
    } 
}
function ice_cremas(){
    ice = prompt("ICE CREAM MENU\n 1. CHOCOLATE  200Rs\n 2. STRAWBERRY  200Rs\n 3. VANILLA  200Rs\n 4. BUTTERSCOTCH  200Rs\n 5. CASSATA  200Rs\n 6. GO BACK \n 7. EXIT")
    if(ice<=5 && ice>=1)
    {
      ice_cremas_again();
    }    
    else{
        if(ice =="6"){
            main_menu()
        }
        else if(ice =="7"){
            thank_you()
        }
        else{
            prompt("Try again")
            ice_cremas()
        }
    } 
}
function ice_cremas_again(){
    ice_count = prompt("HOW MANY PORTIONS  DO U WANT")
    if(ice_count>0 && ice_count<=20){
        if(ice == "1")
        {
            ice_tot = ice_count*200
            amount(ice_tot,"CHOCOLATE ICE CREAM",ice_count)
        }
        else if(ice == "2")
        {
            ice_tot = ice_count*200
            amount(ice_tot,"STRAWBERRY ICE CREAM",ice_count)
        }
        else if(ice=="3")
        {
            ice_tot =  ice_count*200
            amount(ice_tot,"VANILLA ICE CREAM",ice_count)
        }
        else if(ice=="4")
        {
            ice_tot = ice_count*200
            amount(ice_tot,"BUTTERSCOTCH ICE CREAM",ice_count)
        }
        else if(ice=="5"){
            ice_tot = ice_count*200
            amount(ice_tot,"CASSATA",ice_count)
        }
    }
    else{
        prompt("Sorry Invalid Input")
        ice_cremas_again();
    } 
}

function shakes(){
    sha = prompt("SHAKE MENU \n1. VANILLA SHAKE 200Rs\n2. COOL MINT 150Rs\n3. CHOCO CHIP COOKIE 250Rs\n4. BERRY SHAKE 300Rs\n5. DATE SHAKE 250Rs\n6. GO BACK\n7. EXIT")
    if(sha<=5 && sha>=1)
    {
       shakes_again();
    }    
    else{
        if(sha =="6"){
            main_menu()
        }
        else if(sha =="7"){
            thank_you()
        }
        else{
            prompt("Try again")
            shakes()
        }
    } 
}
function shakes_again(){
    sha_count = prompt("HOW MANY PORTIONS DO U WANT")
    if(sha_count>0 && sha_count<=20){
        if(sha == "1")
        {
           sha_tot = sha_count*200
           amount(sha_tot,"VANILLA SHAKE",sha_count)
       }
       else if(sha == "2")
       {
           sha_tot = sha_count*150
           amount(sha_tot,"COOL MINT SHAKE",sha_count)
       }
       else if(sha=="3")
       {
           sha_tot =  sha_count*250
           amount(sha_tot,"CHOCO CHIP COOKIE",sha_count)
       }
       else if(sha=="4")
       {
           sha_tot = sha_count*300
           amount(sha_tot,"BERRY SHAKE",sha_count)
       }
       else if(sha=="5"){
           sha_tot = sha_count*250
           amount(sha_tot,"DATE SHAKE",sha_count)
       }
    }   
   else{
       prompt("Sorry Invalid Input")
       shakes_again();
   } 
}
main_menu()
function thank_you(){
    document.write("<h1 id = \"thank\">THANK YOU FOR VISITING RSK CAFE,  HAVE A NICE DAY COME VISIT US AGAIN</h1>")
    document.write("<a href=\"lick it.html\" style=\"color: burlywood;\">Back to website</a>")
}
function rel(){
    let chance=prompt("YOU HAVE SELECTED A INVALID OPTION \n DO U WISH TO CONTINUE OR EXIT \n Type 'S' for Continue or press 'E' to Exit")
    if(chance == "s"||chance == "S"){
        main_menu();
    }
    else if(chance == "E"|| chance == "e"){
        thank_you()
    }
    else{
        prompt("Sorry U have selected a invalid Option try again")   
        rel()    
    }

}

// real
function amount(x,y,z)
{
    
    amountss.push(x)
    names.push(y)
    count.push(z)
    get_away()
     
}
function get_away(){
    let c = prompt("DO U WANT TO ADD ON OR Go to PAYMENT \n Press 'A' for Adding or Press  'P'  for payment")
    if(c == "a"|| c == "A")
    {
        main_menu();
    }
    else if(c == "p"|| c=="P"){
        document.write("<center><h1>Rsk Cafe</h1>","<br>")
        document.write("<h2>BILLING</h2>","<br>")
        var sum=0;
        for(i in amountss)
        {
            sum=sum+amountss[i]
        }
        document.write("<table><thead><tr><th>S.NO</th><th>ITEM</th><th>QUANTITY</th><th>AMOUNT</th></tr></thead><tbody>")
        
        for(let i =0;i<amountss.length;i++)
        {
            document.write("<tr><td>",i+1,"</td><td>",names[i],"</td><td>",count[i],"</td><td>",amountss[i],"Rs","</td></tr>")
        
        }
        document.write("<tr><td></td><td>TOTAL BILL</td><td></td><td>",sum,"Rs","</td></tr>")
        document.write("</tbody><table></center>")
        document.write("<marquee><h2>THANK YOU FOR VISITING RSK CAFE , HAVE A NICE DAY COME VISIT US AGAIN . . . .</h2></marquee><br>")
    }
    else{
        prompt("I'm sorry U have Selected a Invalid Option, PLEASE TRY AGAIN")
        get_away()
    }
}