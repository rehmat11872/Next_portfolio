<h1 align="center">Welcome to developer-portfolio 👋</h1>
<a href="https://github.com/rehmat11872/Next_portfolio/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/rehmat11872/Next_portfolio"></a><a href="https://github.com/rehmat11872/Next_portfolio/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/rehmat11872/Next_portfolio"></a><a href="https://github.com/rehmat11872/Next_portfolio/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/rehmat11872/Next_portfolio"></a> <a href="https://github.com/rehmat11872/Next_portfolio/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/rehmat11872/Next_portfolio"></a>

## Software Developer Portfolio Template built with Next.js, bootstrap that helps you showcase your work and skills as a software developer.

<p align="center">
  <kbd>
    <img src="https://github.com/rehmat11872/Next_portfolio/blob/master/picture.PNG"></img>
  </kbd>
</p>

## To view a live example, **[click here]('https://rehmat-resume.netlify.app/)**.

Just Edit `portfolio.js` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/rehmat11872/Next_portfolio/issues).

If you created something awesome and want to contribute then feel free to open an [pull request](https://github.com/rehmat11872/Next_portfolio/pulls).

## Sections

✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Feedbacks\
✔️ Projects\
✔️ Github Profile

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
<br>
**For Windows** Install Visual C++ Build Environment: [Visual Studio Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) 

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use

1. Fork this repoistory and clone it to your local machine.

```bash
$ git clone https://github.com/<your-username>/developer-portfolio.git
```

2. Go into the repository

```bash
$ cd developer-portfolio
```

3. Install dependencies

```bash
$ yarn
$ npm install
```

4. Edit `portfolio.js`

5. Start your development server

```bash
$ yarn dev
npm run dev

```

## Linking Portfolio to Github

```javascript
  //  portfolio.js
  githubUserName: 'YOUR GITHUB USERNAME HERE',
```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [reactstrap](https://reactstrap.github.io/)
- [react-reveal](https://www.react-reveal.com/)
- [react-lottie](https://www.npmjs.com/package/react-lottie)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)

## Illustrations

- [Lottie File Source](https://lottiefiles.com)

## Icons

Iconify Icons are used in skill section. You can find all the icons here: [Iconify](https://icon-sets.iconify.design/).

## For the Future

If you can help us with these. Please don't hesitate to open a [pull request](https://github.com/rehmat11872/Next_portfolio/pull).

- Enable Dark Mode

- Add More Sections

## Author

👤 **Rehmat Qadeer**

- Website: https://rehmat-resume.netlify.app/
- Github: [@rehmat11872](https://github.com/rehmat11872)
- LinkedIn: [@rehmat-qadeer-577703178](https://www.linkedin.com/in/rehmat-qadeer-577703178)

## Show your support

Give a ⭐️ if this project helped you!



## Docker commands
docker build -t next-portfolio .
docker run -d \
  -p 3000:3000 \
  --name my-portfolio \
  next-portfolio

## Stop the detached container
docker stop my-portfolio

## Remove it
docker rm my-portfolio

## Run in the foreground
docker run \
  --rm \
  --name my-portfolio \
  -p 3000:3000 \
  next-portfolio
