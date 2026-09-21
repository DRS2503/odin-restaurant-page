import odinImage from '../img/restaurant.jpg';

export function menuPage(){
    const contentDiv = document.querySelector('#content');
    
    const innerContentDiv = document.createElement('div');
    //set classes class="flex-jcenter small-gap"
    innerContentDiv.classList.add('flex-jcenter','small-gap', 'container');
    //append to div#content
    contentDiv.append(innerContentDiv);
    
    const textDiv = document.createElement('div');
    //append to innerContentDiv
    innerContentDiv.append(textDiv);
    
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'Menu Page';
    //append to textDiv
    textDiv.append(headerTwo);
    
    const heroParagraph = document.createElement('p');
    heroParagraph.textContent = 'This is the menu page with lots of food'
    //append to textDiv
    textDiv.append(heroParagraph);
    
    const restaurantImg = document.createElement('img');
    restaurantImg.src = odinImage;
    //add src and width and heigh
    //append textDiv
    innerContentDiv.append(restaurantImg);
    //Done
}