


// DATA
document.addEventListener('DOMContentLoaded' , function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }
    const jsonData = [{
      "ratingScore": 3,
      "reviewTitle": "Fabulous Thermos Properties",
      "reviewDescription": "I have bought many different kinds of thermos bottles from various hardware stores and I was always extremely disappointed because the bottles would not keep my water hot or cold for more than a few hours. This product has a fantastic ability to keep the contents at the same temperature they were when I first put them into the bottle. I found a great trick to help me. If I want to keep some Apple Juice ice cold, I create about six ice cubes made of the apple juice and put them into the bottle first. Then I fill the bottle with the cold apple juice. The ice cubes remain intact for almost 24 hours. I kid you not! This water bottle is the first and only product I have ever found that will do that for me. It is far more suitable and keeps my liquid cold for almost 24 hours. I haven't tried hot liquids yet. But I assume they will keep hot just as well as the cold liquids keep cold. I am incredibly happy to own a thermos water bottle that will keep my liquid contents at the original temperature. I would be happy to have paid $100 for this product. But I only had to pay $40. As soon as I experienced this bottle, I ordered two more for my two close friends. I wish this bottle came with some instructions on how to use the straw. It is pretty well self-evident but I just wish the product would explain how to make good use of the straw. I fear you may not publish the rest of this review because it concerns delivery and not product quality. If you have to delete the remainder of this review, I will understand. I was an Amazon customer for two years. I lived in a high rise apt building and I contacted Amazon customer service many times to complain I requested they leave my packages outside my door and knock when they delivered it. But they refused to come to my apt. door. Instead, they left my packages in the ground floor lobby where it was extremely easy for them to become lost or stolen. Ultimately, I had to cancel my Amazon account. Eventually they started leaving the packages outside my apartment door and I resumed buying from Amazon. I was very pleased about that. But there still remains one problem. I need the drivers to knock on my door when they leave my packages so I know they have been delivered. Otherwise, they sit outside my door for a very long time where they are easy to get lost or stolen. Your service is truly wonderful."
    },
    {
      "ratingScore": 4,
      "reviewTitle": "I love the color and design",
      "reviewDescription": "I love this Owala water bottle. Very easy to hold on and open the cap with one hand. As I love it so much , I drink more water than usual. It might not fit to all car cup holder as it is a little bit wider. The weight of the water bottle is alright, much lighter than the same size of Yeti but heavier than Swell. Overall I am very happy , star took out due to not fit into my car’s cup holder."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Good quality and no more ice hitting your mouth while drinking.",
      "reviewDescription": "The 40oz bottle is pretty big and won’t fit in most cup holders (it fits fine in a cup holder extender), but I wanted extra capacity and that’s perfect for my needs. Also, it’s super easy to drink/sip from it, a real game changer for me compared to my older thermos bottle."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Wonderful",
      "reviewDescription": "Very good quality, we use it on a daily basis and it keeps water cold for many hours"
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Amazing",
      "reviewDescription": "My last owala had mould in the lid so i disposed of it (I know I could clean it but mould makes me incredibly anxious) but I loved it so much I decided to buy another. It's the only water bottle I've ever liked."
    },
    {
      "ratingScore": 5,
      "reviewTitle": "Doesn't leak and keep the water cold for a very long time",
      "reviewDescription": "Absolutely love this water bottle. It is my first Owala and I love it. it keeps the water cold for a long time, and it doesn't leak. Fits in any car bottle holder I have encountered since I have it"
    },
    {
      "ratingScore": 4,
      "reviewTitle": "don't hesitate - best water bottle",
      "reviewDescription": "only deducting one star because of the price. but hands down the best water bottle. keeps things cold, so easy to clean, even my kids requested them. the only bottle i seem to buy now, have quite a few, and the only one my kids haven't lost yet because they themselves like it so much, they keep track of it."
    }]





  // CONTROLS FOR HOW THE DATA LOOKS AND SUCH

  let output = "";
 
  let name = ["Eliza Duke", "Jaden Harvey" , "Arron Kent","Ivy Kirk" , "Huda Nolan" , "Mia Lee" , "Mohammad Roberson" ,"Alexandria Maxwell" , "Issac Pearce", "Yasmin Wang"]
  let i = 0;
  jsonData.forEach(item => {
    let ratingValue = item.ratingScore*20;
    output += `
        <div class="review">
         
         <h3> <p> ${name[i]}</p> <br>
         <div class="ratings">
            <div class="ratings-val" style="width: ${(ratingValue)}% ;"></div><!-- End .ratings-val -->
          </div><!-- End .ratings -->   ${item.reviewTitle}</h3>
          <p id="reviewdes">${item.reviewDescription}</p>
        </div>
      `;
      i++;
    });
    
    document.getElementById("outputerr").innerHTML = output;

   
    

    const clickText1 = document.getElementById("pro1");
    const clickText2 = document.getElementById("pro2");
    const clickText3 = document.getElementById("pro3");
    const clickText4 = document.getElementById("con1");
    const clickText5 = document.getElementById("con2");
    const clickText6 = document.getElementById("con3");
   
      
      function highlight_review_one() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("insulation")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_two() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("leak-proof")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_three() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("design")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_four() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("price")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

      function highlight_review_five() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("wide")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }

    

      function highlight_review_six() {
        const allReviews = document.querySelectorAll('.review');

        allReviews.forEach(el => {
          if (el.innerText.includes("mold")) {
            el.style.backgroundColor = "yellow";
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          else{
            el.style.backgroundColor = "white";
          }
        })
      }
     
      clickText1.addEventListener('click', highlight_review_one);
      clickText2.addEventListener('click', highlight_review_two);
      clickText3.addEventListener('click', highlight_review_three);
      clickText4.addEventListener('click', highlight_review_four);
      clickText5.addEventListener('click', highlight_review_five);
      clickText6.addEventListener('click', highlight_review_six);


//end of what was working!!



                                                                                                                                                                                                                                                      
//TESTING OPEN AI

// async function analyzeReviews() {
//   const reviewText = reviews.map(r => r.reviewDescription).join("\n");

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "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"
//     },
//     body: JSON.stringify({
//       model: "gpt-4.1",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant that extracts pros and cons from Amazon product reviews."
//         },
//         {
//           role: "user",
//           content: `Here are some reviews:\n${reviewText}`
//         }
//       ],
//       functions: [
//         {
//           name: "generate_pros_and_cons",
//           description: "Extracts pros and cons from a list of product reviews.",
//           parameters: {
//             type: "object",
//             properties: {
//               pros: {
//                 type: "array",
//                 items: { type: "string" }
//               },
//               cons: {
//                 type: "array",
//                 items: { type: "string" }
//               }
//             },
//             required: ["pros", "cons"]
//           }
//         }
//       ],
//       function_call: { name: "generate_pros_and_cons" }
//     })
//   });

//   const data = await response.json();

//   const result = JSON.parse(data.choices[0].message.function_call.arguments);

//   document.getElementById("results").innerHTML = `
//         <h2>Pros</h2>
//         <ul>${result.pros.map(p => `<li>${p}</li>`).join("")}</ul>
//         <h2>Cons</h2>
//         <ul>${result.cons.map(c => `<li>${c}</li>`).join("")}</ul>
//       `;

// }

// document.getElementById("analyze").addEventListener("click", analyzeReviews);








}) 







  