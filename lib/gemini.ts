import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateLinkedInPost(topic: string, description: string, tone: string ,contentLength : string , emojiUsage : string , seriousness : string) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Note: Using gemini-pro as gemini-1.5-flash isn't available

    const prompt =`
        You need to create a linkedin post with the context to the topic and description given below , while creating the post keep these points in the mind.

        1) Keep the text formatting accourding to a text formatting example given below , generate all the content accourding to that , generated content should be like that, dont add any initials or something
        2) Dont over exagerrate the things in the generated post , with creating uneccesary list or someting , create a post which fullfills the users topic and description .
         -- try to create a post if like two to three paragraphs , if there is less information , try to generate some scenarios which could possibly happen , like if it is about coding , use erros fixing thing , or others..
         -- the length of the post should be accourding to the CONTENTLENGTH given below , for low keep atmost 1 paragraphs , for medium keep maximum 2 or 3 paragraphs accourding to description provided , for high keep upto 4 to 5 paragraphs 
        3) the tone of the post language should be accourding to the ton provided below , try to keep the post in the tone user provided
        4) keep proper spacing between the paragraphs if there are so 
        5) if the linkedin post description is about achievment or some promotion or matching to these cases , show the exictment and happiness
        6) if post is about some uneven circumstance which is creating some failure or loss or something related , be in low tone .
        7) Use Emojis while writing the post givin below dont use any other emoticons other than these , get the feeling of the post and use the specific emoji for the use case : 
        NOTE : the amount of emoji usage throughout the text should be accourding to the EMOJIUSAGE given below , if it is low then use 4-5 emojis,  if it is medium use 9-12 emojis or more if required, if it high then use more than 12 emojis
                    Professional or Achievement-Related Posts
                    Success 🏆, 💪, 🎯, 🚀
                    Excitement/Enthusiasm 🤩, 🥳, 🎉, 🌟
                    Celebration 🎊, 🎁, 🥂
                    Hard Work 🔨, 💼, 🕒
                    Educational or Informative Posts
                    Learning/Growth 📚, 🧠, 🌱
                    Sharing Knowledge 📝, 💡, 🗣️
                    Innovation 💡, 🌐, ⚙️
                    Research/Exploration 🔍, 🧪
                    Networking or Collaboration
                    Connections 🤝, 🌍, 💬
                    Teamwork 👥, 👩‍💻👨‍💻, 💡
                    Gratitude 🙏, 💖, 🌟
                    Motivational or Inspirational Posts
                    Positivity ✨, 🌈, ☀️
                    Resilience 🔥, 💪, 🛠️
                    New Beginnings 🌟, 🌱, 🚀
                    Tech/Startup/Entrepreneurship Posts
                    Technology 💻, 📱, 🖥️
                    Ideas/Innovation 💡, 🤔, 🌐
                    Startup Spirit 🚀, ⚡, 🔥
                    Closing or CTA (Call to Action)
                    Engagement/Call to Action 👇, 🗣️, 📢
                    Thank You 🙏, 💖, 👏
                    Future Goals 🎯, 🔮, 📈

          8) dont try to teach someone , keep the post to showing the self thing for the topic , unless its stated in the description

          9) For the seriousness of the word in the post generated , use the SERIOUSINDEX given below , for low , try to be casual you dont care , like with the usage of the words,if it is medium , ignore this thing , be what you are , for high try not to use uneccesary stuff be to the point

          10) use some related hashtags accourding to the topic and description , maximum use 6 hashtags accouding to contentlength given



        (use h2 for bold text , use ul li for list , and a p for a paragraph )

        ---Text Formating example : 
            <h2>
              Hi there,
            </h2>
            <p>
              this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
            </p>
            <ul>
              <li>
                That’s a bullet list with one …
              </li>
              <li>
                … or two list items.
              </li>
            </ul>
            <p>
              Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
            </p>

            <p>
              I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
            </p>


          ---textformating example end here


        TOPIC = ${topic}
        DESCRIPTION = ${description}
        TONE = ${tone}
        CONTENTLENGTH=${contentLength}
        EMOJIUSAGE=${emojiUsage}
        SERIOUSINDEX=${seriousness}
            
    `
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.log("Error in Gemini API call:", error);
    throw error;
  }
}

// CONTENTLENGTH=${contentLength}
//         EMOJIUSAGE=${emojiUsage}
//         SERIOUSINDEX=${seriousness}