import odinImage from '../img/restaurant.jpg';

export function aboutPage(){
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
    headerTwo.textContent = 'About Us';
    //append to textDiv
    textDiv.append(headerTwo);
    
    const heroParagraph = document.createElement('p');
    heroParagraph.textContent = 'Let me tell you a bit about us'
    //append to textDiv
    textDiv.append(heroParagraph);
    
    const restaurantImg = document.createElement('img');
    restaurantImg.src = odinImage;
    //add src and width and heigh
    //append textDiv
    innerContentDiv.append(restaurantImg);
    //Done
}