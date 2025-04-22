
window.studentName = "";

let currentSlide = 0;
let studentResponses = {};
let correctAnswers = {
    closeTo360Q: "6 radians",
    approx2piQ: "6.28",
    angleDefQ: "An angle is a measure of rotation.",
    degreeQ: "A degree is one portion of a circle divided into 360 equal parts.",
    arcEqualsRadiusQ: "1 radian",
    compareAngleQ: "1 radian",
    thirtyStepQ: "12 times",
    deg120Q: "2π/3",
    deg150Q: "5π/6",
    deg210Q: "7π/6",
    deg270Q: "3π/2",
    deg300Q: "5π/3",
    deg45Q: "π/4",
    deg90Q: "π/2",
    deg135Q: "3π/4",
    deg225Q: "5π/4",
    deg315Q: "7π/4",
    sin1Q: "1",
    cos1Q: "-1",
    tan1Q: "1",
    sin2Q: "-1",
    cos2Q: "-√3/2"
 

  };
  

let slideContent = [
  {
    html: `<h2>Introduction</h2>
           <p>We're going on an exploration into the world of radians! When you have your notes, click continue.</p>`
  },
  {
    html: `<h2>What Will You Learn Today?</h2>
           <p>Today you will learn about radians — how they relate to degrees, where they come from, how to convert between them, how they appear on the unit circle, and how to use them in trigonometric functions.</p>`
  },
  {
    html: `<h2>What is a Degree?</h2>
           <p>A full rotation divided into 360 equal parts creates one degree. That’s where the unit comes from.</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/whatisadegree.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  
  
  {
    html: `<h2>Where Did 360 Come From?</h2>
         <p>Rumor has it the \"ancients\" believed there were 360 days in a year. They observed that the Earth made a complete rotation around the sun during that year. So... 1 day = 1 degree of rotation in the sky. That’s where the idea of 360° in a circle may have come from!</p>
         <video controls width=\"100%\" style=\"max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\">
           <source src=\"images/1day.mp4\" type=\"video/mp4\">
           Your browser does not support the video tag.
         </video>`
  },
  {
    html: `<h2>What is an Angle?</h2>
           <p>Choose the best definition of an angle:</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
  <li><input type="radio" name="angleDefQ" value="An angle is the space between two lines." /> An angle is the space between two lines.</li>
  <li><input type="radio" name="angleDefQ" value="An angle is how far a triangle opens." /> An angle is how far a triangle opens.</li>
  <li><input type="radio" name="angleDefQ" value="An angle is a measure of rotation." /> An angle is a measure of rotation.</li>
  <li><input type="radio" name="angleDefQ" value="An angle is a number between 0 and 360." /> An angle is a number between 0 and 360.</li>
</ul>`
  },
  {
    html: `<h2>What is a Degree?</h2>
           <p>Choose the correct definition of a degree:</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="degreeQ" value="A degree is the length of the radius." /> A degree is the length of the radius.</li>
             <li><input type="radio" name="degreeQ" value="A degree is a type of angle only used in geometry." /> A degree is a type of angle only used in geometry.</li>
             <li><input type="radio" name="degreeQ" value="A degree is one portion of a circle divided into 360 equal parts." /> A degree is one portion of a circle divided into 360 equal parts.</li>
             <li><input type="radio" name="degreeQ" value="A degree is a unit used only in trigonometry." /> A degree is a unit used only in trigonometry.</li>
           </ul>`
  },
  {
    html: `<h2>Introducing a Radian</h2>
         <p>Every angle has an initial side and a terminal side. When those two sides intersect a circle, they form an arc. If the length of that arc is exactly the same as the length of the radius, the angle is called <strong>1 radian</strong>.</p>
         <p>A radian is simply a different unit of measurement for angles — kind of like how inches and centimeters both measure length but use different scales. Instead of dividing a circle into 360 degrees, radians are based on the relationship between arc length and radius.</p>`
  },
  {
    html: `<h2>See a Radian in Action</h2>
           <p>Every angle has an initial side and a terminal side. When those two sides intersect a circle, they form an arc. If the length of that arc is exactly the same as the length of the radius, the angle is called <strong>1 radian</strong>.</p>
         <p>A radian is simply a different unit of measurement for angles — kind of like how inches and centimeters both measure length but use different scales. Instead of dividing a circle into 360 degrees, radians are based on the relationship between arc length and radius.</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/radian1.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  {
    html: `<h2>What is a Degree?</h2>
           <p>Choose the correct definition of a degree:</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="degreeQ" value="A degree is the length of the radius." /> A degree is the length of the radius.</li>
             <li><input type="radio" name="degreeQ" value="A degree is a type of angle only used in geometry." /> A degree is a type of angle only used in geometry.</li>
             <li><input type="radio" name="degreeQ" value="A degree is one portion of a circle divided into 360 equal parts." /> A degree is one portion of a circle divided into 360 equal parts.</li>
             <li><input type="radio" name="degreeQ" value="A degree is a unit used only in trigonometry." /> A degree is a unit used only in trigonometry.</li>
           </ul>`
  },
  {
    html: `<h2>Comparing Angle Units</h2>
           <p>Which is larger: an angle that measures 1 degree, or one that measures 1 radian?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="compareAngleQ" value="1 degree" /> 1 degree</li>
             <li><input type="radio" name="compareAngleQ" value="1 radian" /> 1 radian</li>
             <li><input type="radio" name="compareAngleQ" value="They are equal" /> They are equal</li>
             <li><input type="radio" name="compareAngleQ" value="It depends on the context" /> It depends on the context</li>
           </ul>`
  },
  
  {
    html: `<h2>Enter the Radian – Part 1</h2>
           <p>The number of radians needed to complete a full rotation is not a whole number — it’s an irrational number. This means it can’t be written as a simple fraction.</p>`
  },
  {
    html: `<h2>Enter the Radian – Part 2</h2>
           <p>The number of radians needed to complete a full rotation is not a whole number — it’s an irrational number. This means it can’t be written as a simple fraction.</p>
           <p>The circumference of a circle is given by the formula: <strong>C = 2πr</strong>.</p>
           <p>Since one radian is defined as an arc length equal to the radius, we can think of a full circle as having <strong>2π radians</strong> — that’s how many radius-length arcs fit into a circle.</p>`
  },
  {
    html: `<h2>Enter the Radian – Part 3</h2>
           <p>The number of radians needed to complete a full rotation is not a whole number — it’s an irrational number. This means it can’t be written as a simple fraction.</p>
           <p>The circumference of a circle is given by the formula: <strong>C = 2πr</strong>.</p>
           <p>Since one radian is defined as an arc length equal to the radius, we can think of a full circle as having <strong>2π radians</strong> — that’s how many radius-length arcs fit into a circle.</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/entertheradian.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  {
    html: `<h2>Radians and 360 Degrees</h2>
           <p>An angle of how many radians is closest to 360 degrees without exceeding it?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="closeTo360Q" value="5 radians" /> 5 radians</li>
             <li><input type="radio" name="closeTo360Q" value="6 radians" /> 6 radians</li>
             <li><input type="radio" name="closeTo360Q" value="7 radians" /> 7 radians</li>
             <li><input type="radio" name="closeTo360Q" value="359 radians" /> 359 radians</li>
           </ul>`
  },
  {
    html: `<h2>Approximating 2π</h2>
           <p>What number is the closest approximation to <strong>2π</strong>?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="approx2piQ" value="6.14" /> 6.14</li>
             <li><input type="radio" name="approx2piQ" value="6.28" /> 6.28</li>
             <li><input type="radio" name="approx2piQ" value="6.41" /> 6.41</li>
             <li><input type="radio" name="approx2piQ" value="3.14" /> 3.14</li>
           </ul>`
  },
  
  {
    html: `<h2>Around the World – 30° at a Time</h2>
           <p>How many times would you need to rotate by 30 degrees before completing a full revolution?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="thirtyStepQ" value="10 times" /> 10 times</li>
             <li><input type="radio" name="thirtyStepQ" value="11 times" /> 11 times</li>
             <li><input type="radio" name="thirtyStepQ" value="12 times" /> 12 times</li>
             <li><input type="radio" name="thirtyStepQ" value="13 times" /> 13 times</li>
           </ul>`
  },
  {
    html: `<h2>30° x 12 = 360°</h2>
           <p>360 divided by 30 is 12. It would take 12 angles of 30 degrees each to complete a circle.</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/thirty.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  {
    html: `<h2>30° = π/6 Radians</h2>
           <p>We just saw that 30° is 1/12 of a full circle because 360 ÷ 30 = 12.</p>
           <p>Now let’s look at this in radians: if we divide a circle (2π radians) into 12 equal parts, each part is 2π ÷ 12 = π/6 radians.</p>
           <p>This means 30° = π/6 exactly.</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/thirtypi.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  
  

  
  {
    html: `<h2>Radians Practice – Multiple Choice</h2>
  
           <p>What is the radian equivalent of 120°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg120Q" value="π/3" /> π/3</li>
             <li><input type="radio" name="deg120Q" value="2π/3" /> 2π/3</li>
             <li><input type="radio" name="deg120Q" value="3π/4" /> 3π/4</li>
             <li><input type="radio" name="deg120Q" value="π" /> π</li>
           </ul>
  
           <p>What is the radian equivalent of 150°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg150Q" value="5π/6" /> 5π/6</li>
             <li><input type="radio" name="deg150Q" value="3π/4" /> 3π/4</li>
             <li><input type="radio" name="deg150Q" value="7π/6" /> 7π/6</li>
             <li><input type="radio" name="deg150Q" value="π/2" /> π/2</li>
           </ul>
  
           <p>What is the radian equivalent of 210°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg210Q" value="7π/6" /> 7π/6</li>
             <li><input type="radio" name="deg210Q" value="5π/4" /> 5π/4</li>
             <li><input type="radio" name="deg210Q" value="4π/3" /> 4π/3</li>
             <li><input type="radio" name="deg210Q" value="3π/2" /> 3π/2</li>
           </ul>
  
           <p>What is the radian equivalent of 270°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg270Q" value="3π/2" /> 3π/2</li>
             <li><input type="radio" name="deg270Q" value="2π" /> 2π</li>
             <li><input type="radio" name="deg270Q" value="π" /> π</li>
             <li><input type="radio" name="deg270Q" value="5π/3" /> 5π/3</li>
           </ul>
  
           <p>What is the radian equivalent of 300°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg300Q" value="5π/3" /> 5π/3</li>
             <li><input type="radio" name="deg300Q" value="11π/6" /> 11π/6</li>
             <li><input type="radio" name="deg300Q" value="7π/6" /> 7π/6</li>
             <li><input type="radio" name="deg300Q" value="4π/3" /> 4π/3</li>
           </ul>`
  },
  
  {
    html: `<h2>Let’s Talk 45!</h2>
           <p>Let’s look at angles that are multiples of 45°.</p>
           <p>360 divided by 45 equals 8. That means it takes 8 angles of 45° to complete a full circle.</p>
           <p>So 45° is 1/8 of a full rotation!</p>`
  },
  
  {
    html: `<h2>Let’s Talk 45! (Visual)</h2>
           <p>Let’s look at angles that are multiples of 45°.</p>
           <p>360 divided by 45 equals 8. That means it takes 8 angles of 45° to complete a full circle.</p>
           <p>So 45° is 1/8 of a full rotation!</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/45.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  
  {
    html: `<h2>Radians Practice – Multiples of 45°</h2>
  
           <p>What is the radian equivalent of 45°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg45Q" value="π/6" /> π/6</li>
             <li><input type="radio" name="deg45Q" value="π/4" /> π/4</li>
             <li><input type="radio" name="deg45Q" value="π/3" /> π/3</li>
             <li><input type="radio" name="deg45Q" value="π/2" /> π/2</li>
           </ul>
  
           <p>What is the radian equivalent of 90°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg90Q" value="π" /> π</li>
             <li><input type="radio" name="deg90Q" value="π/2" /> π/2</li>
             <li><input type="radio" name="deg90Q" value="2π/3" /> 2π/3</li>
             <li><input type="radio" name="deg90Q" value="3π/4" /> 3π/4</li>
           </ul>
  
           <p>What is the radian equivalent of 135°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg135Q" value="3π/4" /> 3π/4</li>
             <li><input type="radio" name="deg135Q" value="5π/6" /> 5π/6</li>
             <li><input type="radio" name="deg135Q" value="π/2" /> π/2</li>
             <li><input type="radio" name="deg135Q" value="π/3" /> π/3</li>
           </ul>
  
           <p>What is the radian equivalent of 225°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg225Q" value="5π/4" /> 5π/4</li>
             <li><input type="radio" name="deg225Q" value="4π/3" /> 4π/3</li>
             <li><input type="radio" name="deg225Q" value="7π/6" /> 7π/6</li>
             <li><input type="radio" name="deg225Q" value="3π/2" /> 3π/2</li>
           </ul>
  
           <p>What is the radian equivalent of 315°?</p>
           <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
             <li><input type="radio" name="deg315Q" value="7π/4" /> 7π/4</li>
             <li><input type="radio" name="deg315Q" value="11π/6" /> 11π/6</li>
             <li><input type="radio" name="deg315Q" value="3π/2" /> 3π/2</li>
             <li><input type="radio" name="deg315Q" value="2π" /> 2π</li>
           </ul>`
  },
  
  {
    html: `<h2>Rad Trig</h2>
           <p>If you know how to use the unit circle for degrees, all you need to do in radians is find the angle translation.</p>
           <p>Remember: y = sin, x = cos, and tan = y/x (or sin/cos).</p>
           <img src="images/radtrig.jpg" alt="Trig Reference Diagram" style="max-width: 100%; height: auto; border-radius: 12px; margin-top: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">`
  },
  {
    html: `<h2>Rad Trig</h2>
           <p>If you know how to use the unit circle for degrees, all you need to do in radians is find the angle translation.</p>
           <p>Remember: y = sin, x = cos, and tan = y/x (or sin/cos).</p>
           <video controls width="100%" style="max-width: 600px; border-radius: 12px; margin: 20px auto; display: block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
             <source src="images/rad trig.mp4" type="video/mp4">
             Your browser does not support the video tag.
           </video>`
  },
  {
    html: `<h2>Trig Practice in Radians</h2>
  
           <p>What is sin(π/2)?</p>
           <ul>
             <li><input type="radio" name="sin1Q" value="0" /> 0</li>
             <li><input type="radio" name="sin1Q" value="1" /> 1</li>
             <li><input type="radio" name="sin1Q" value="-1" /> -1</li>
             <li><input type="radio" name="sin1Q" value="√3/2" /> √3/2</li>
           </ul>
  
           <p>What is cos(π)?</p>
           <ul>
             <li><input type="radio" name="cos1Q" value="1" /> 1</li>
             <li><input type="radio" name="cos1Q" value="-1" /> -1</li>
             <li><input type="radio" name="cos1Q" value="0" /> 0</li>
             <li><input type="radio" name="cos1Q" value="√2/2" /> √2/2</li>
           </ul>
  
           <p>What is tan(π/4)?</p>
           <ul>
             <li><input type="radio" name="tan1Q" value="1" /> 1</li>
             <li><input type="radio" name="tan1Q" value="√2" /> √2</li>
             <li><input type="radio" name="tan1Q" value="0" /> 0</li>
             <li><input type="radio" name="tan1Q" value="undefined" /> undefined</li>
           </ul>
  
           <p>What is sin(3π/2)?</p>
           <ul>
             <li><input type="radio" name="sin2Q" value="-1" /> -1</li>
             <li><input type="radio" name="sin2Q" value="0" /> 0</li>
             <li><input type="radio" name="sin2Q" value="1" /> 1</li>
             <li><input type="radio" name="sin2Q" value="√3/2" /> √3/2</li>
           </ul>
  
           <p>What is cos(5π/6)?</p>
           <ul>
             <li><input type="radio" name="cos2Q" value="-√3/2" /> -√3/2</li>
             <li><input type="radio" name="cos2Q" value="-√2/2" /> -√2/2</li>
             <li><input type="radio" name="cos2Q" value="-1/2" /> -1/2</li>
             <li><input type="radio" name="cos2Q" value="0" /> 0</li>
           </ul>`
  },
  
  
  {
    html: `<h2>Summary: What You've Learned</h2>
           <ul style="max-width: 600px; margin: 0 auto; text-align: left;">
             <li>Angles measure rotation, and degrees divide a circle into 360 parts.</li>
             <li>Radians are another way to measure angles, using arc length and radius.</li>
             <li>A full circle is 2π radians — this comes from the formula for circumference.</li>
             <li>You learned to convert between degrees and radians.</li>
             <li>You practiced locating angles and trig values on the unit circle.</li>
             <li>Sin = y, Cos = x, and Tan = y/x on the unit circle.</li>
           </ul>`
  },
  {
    html: `<h2>🎉 Congratulations!</h2>
           <div id="checkpoint-content">
             <p>You've completed the lesson and passed with flying colors.</p>
             <p>Your final score is <strong id="final-score">${calculateScore()}%</strong>.</p>
             <p>Click below to download your custom report:</p>
             <button onclick="generatePDF()">📄 Download PDF Report</button>
           </div>`
  }
  
];
function captureResponses() {
    const allInputs = document.querySelectorAll('input[type="radio"]:checked');
    allInputs.forEach((input) => {
      const name = input.name;
      const value = input.value.trim();
      studentResponses[name] = value;
    });
  }
  
  function calculateScore() {
    let total = 0;
    let correct = 0;
  
    for (let key in correctAnswers) {
      total++; // ✅ Count this question no matter what
  
      const response = studentResponses[key];
      const correctAnswer = correctAnswers[key];
  
      if (response && response === correctAnswer) {
        correct++;
      }
    }
  
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
  }
  
  
  
document.addEventListener("DOMContentLoaded", () => {
  drawCircleBase();
});

function startLesson() {
  window.studentName = document.getElementById("student-name").value.trim();

  if (!studentName) {
    alert("Please enter your name to begin.");
    return;
  }
  document.getElementById("name-screen").style.display = "none";
  document.getElementById("lesson-screen").style.display = "block";
  loadSlide(currentSlide);
}

function loadSlide(index) {
  const content = slideContent[index];
  document.getElementById("lesson-content").innerHTML = content.html;
  const backBtn = document.getElementById("back-button");
  if (index > 1) {
    backBtn.style.display = "inline-block";
  } else {
    backBtn.style.display = "none";
  }
}

function nextSlide() {
    captureResponses();
  
    currentSlide++;
    loadSlide(currentSlide);
  
    // If we're on the checkpoint slide, trigger the score logic
    if (slideContent[currentSlide]?.html?.includes("checkpoint-content")) {
      const score = calculateScore();
      const finalBlock = document.getElementById("checkpoint-content");
    
      if (finalBlock) {
        finalBlock.innerHTML = `<p>Your final score is <strong>${score}%</strong>.</p>`;
      
        if (score >= 80) {
          finalBlock.innerHTML += `
            <p>✅ Great job! You passed the lesson.</p>
            <button onclick="generatePDF()">📄 Download PDF Report</button>
          `;
        } else {
          finalBlock.innerHTML += `
            <p>❌ Uh oh! You need at least 80% to unlock the report.</p>
            <p>Try again and aim for that 80% mastery!</p>
            <button onclick="restartLesson()">🔁 Restart Lesson</button>
          `;
        }
      }
      
    }
    
    
  }
  
  

function previousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    loadSlide(currentSlide);
  }
}

// --- Unit Circle Builder Logic ---
const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;
let currentStep = 0;
const maxSteps = 12;

document.getElementById("rotateButton").addEventListener("click", () => {
  if (currentStep < maxSteps) {
    currentStep++;
    drawCircleBase();
    for (let i = 1; i <= currentStep; i++) {
      drawStep(i);
    }
    document.getElementById("rotationStatus").textContent = `Rotation: ${currentStep * 30}° / ${(currentStep * Math.PI / 6).toFixed(2)} rad`;
  } else {
    document.getElementById("rotationStatus").textContent = `🎉 Full circle complete: 360° = 2π radians!`;
    setTimeout(() => {
        document.getElementById("unit-circle-builder").style.display = "none";
        document.getElementById("report-screen").style.display = "block";
      }, 1000);
      
      
  }
});

function drawCircleBase() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
  ctx.fill();
}

function drawStep(step) {
  const angle = (step * 30 * Math.PI) / 180;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = "#0077cc";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius - 20, (step - 1) * Math.PI / 6, step * Math.PI / 6);
  ctx.strokeStyle = "#28a745";
  ctx.stroke();

  ctx.font = "14px Georgia";
  ctx.fillStyle = "#402c9f";
  ctx.textAlign = "center";
  ctx.fillText(`${step * 30}°`, x, y - 10);
  ctx.fillText(`${step}π/6`, x, y + 10);
}
function launchFinal() {
    document.getElementById("lesson-screen").style.display = "none";
    document.getElementById("report-screen").style.display = "block";
}

function restartLesson() {
  currentSlide = 0;
  studentResponses = {};
  window.studentName = "";
  window.currentStep = 0;

  // Clear report content in case it's showing
  const finalBlock = document.getElementById("checkpoint-content");
  if (finalBlock) {
    finalBlock.innerHTML = "";
  }

  // Reset all screens
  document.getElementById("name-screen").style.display = "block";
  document.getElementById("lesson-screen").style.display = "none";
  document.getElementById("unit-circle-builder").style.display = "none";
  document.getElementById("report-screen").style.display = "none";

  // Reset the name field
  document.getElementById("student-name").value = "";
}


  
// --- PDF Report Generator ---
function generatePDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("⚠️ jsPDF library not loaded properly.");
    console.error("❌ window.jspdf.jsPDF not found");
    return;
  }

  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();

  const name = window.studentName || "Unknown Student";
  const steps = window.currentStep || 0;
  const score = calculateScore();

  doc.setFont("Georgia", "normal");
  doc.setFontSize(14);

  doc.text("Radians Interactive Lesson Report", 20, 20);
  doc.text(`Student: ${name}`, 20, 30);
  doc.text(`Progress: Completed unit circle in ${steps} steps.`, 20, 40);
  doc.text("Final Rotation: 360° = 2π radians", 20, 50);
  doc.text(`Final Score: ${score}%`, 20, 60);

  doc.save(`${name.replace(/\s+/g, '_')}_Radians_Report.pdf`);
}

