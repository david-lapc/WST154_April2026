function generateStory(e) {
    e.preventDefault()
    let personName = document.getElementById('personName').value;
    let place = document.getElementById('place').value;
    let itemCount = document.getElementById('itemCount').value;;
    let item = document.getElementById('item').value;;
    let friendName = document.getElementById('friendName').value;;
    let givenAway = document.getElementById('givenAway').value;;
    let found = document.getElementById('found').value;;
    // 'One morning, ' + personName + "went..." avoid this by using template literal syntax (${---})
    let story = `One morning, ${personName} went to ${place} with ${itemCount} ${item}. At ${place}, ${personName} met ${friendName}, who also liked ${item}. “Wow, ${personName}, you have ${itemCount} ${item}!” said ${friendName}. So ${personName} gave ${givenAway} ${item} to ${friendName}. Now, ${personName} had fewer ${item}, but ${friendName} was happy. Later, ${personName} found ${found} more ${item} at ${place}. At the end of the day, ${personName} counted all the ${item} again. ${personName} now has ${parseFloat(itemCount) - +givenAway + +found} ${item}. It was a fun day at ${place}!`;

    document.getElementById('story').innerText = story;
}

let form = document.getElementById('storyForm');
form.addEventListener('submit', generateStory)





