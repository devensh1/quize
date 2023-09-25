const questionObj = {
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three', 'Four', 'Five'],
  question: "How many pieces of bun are in a McDonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;

const optelem = document.getElementById('options');
const scoreelement = document.getElementById('score');
//const questel = document.getElementById('question');

// using j query//

$('#question').text(questionObj.question);
// trieing to css properties using
$('#question').css({
  'background-color' : "green",
  'color': "#fff",
  'border-radius': "8px",
  'padding': "20px",
  'margin-bottom': "20px",
  'text-align': "center",
  'font-size': "20px"

});



// Separate scoring function
/*
function handleButtonClick() {
  const selectedOption = this.textContent; // 'this' refers to the clicked button
  if (selectedOption === correctAnswer) {
    score++;
  } else {
    score -= 0.25;
  }
  scoreelement.textContent = `Score: ${score}`;// fatching score value using ${score};
}
*/
let score = 0;
// Attach the scoring function to the button's click event listener
for (let i = 0; i < options.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = options[i];

  //btn.addEventListener("click", handleButtonClick);

  $(btn).on('click', function() {
    const selectedOption = $(this).text(); // 'this' refers to the clicked button
    if (selectedOption === correctAnswer) {
      score++;
    } else {
      score -= 0.25;
    }
    $('#score').text(`Score: ${score}`);
  });
  optelem.appendChild(btn);
}


