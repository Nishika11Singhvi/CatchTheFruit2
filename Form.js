class Form
{
    constructor()
    {
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Restart');
    }
    hide() 
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() 
    {
        this.title.html("FRUIT CATCHER");
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'white');

        this.input.position(570,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(575,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(200, 120);
        this.reset.style('width', '70px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => 
        {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(550,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '60px');
        });

        this.reset.mousePressed(()=>
        {
             game.update(0);
             player.updateCount(0);
        })
    }
}