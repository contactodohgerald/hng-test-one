const express = require('express');

const app = express();
const port = process.env.PORT || 8000

//end point for fetching users details
app.get('/', (req, res) => {
    const message = 'Data was successfully returned';
    const data = {
        slackUsername : 'xanta-codes',
        backend : true,
        age : 25,
        bio : 'I`m a graduate of Microbiology with programming skills. I have been designing and creating websites since 2021. I develop web applications with tools such as NodeJs where i use framework like expressJs, adonisJs and PHP where  use framework like Laravel. Finding solutions to challenges, and focused on customer satisfaction.',
    };

    return res.status(200).json({message, data})
});

app.listen(port, () => {
  console.log(`HNG9-STAGE1 listening on port ${port}`)
})