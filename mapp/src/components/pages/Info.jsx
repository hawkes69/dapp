function Info() {
  return (
    <div className="flex flex-col p-6">
      <strong>Hawkes Poulter: Full Stack Developer</strong>
      hawkespoulter@gmail.com
      <br />
      801-404-4932
      <a href="https://www.linkedin.com/in/hawkes-poulter-9b305419a/" className="underline text-blue-500">LinkedIn Profile</a>
      <br />
      <h1 className="font-bold text-xl w-full pb-4">About this App</h1>
      <p className="text-gray-600">
        My wife and I recently moved to Orlando. We wanted to "100%" all of the parks here. Meaning we want to complete
        all of the rides, shows, and restaurants at all of the parks. This app was created to help us keep track of
        our progress. It is also a showcase of my web development skillset. 
        <br />
        The tech stack for this app is: Ruby on Rails, React, Redux, TailwindCSS, and SQLite. This is a mobile first app and does not have a desktop implementation
        as we will be accessing this app almost exclusively from our phones while in the parks. It's intended to fit the iPhone 15 pro screen size but should
        work on most modern phones.
        <br />
        Feel free to click around this demo version. There are some fun animations at both area and experience completion.
        <br />
        <strong>Notes:</strong> You can click on the park icons on the home page to see the progress for each park, as well as get to area 
        completion maps. I didn't feel like putting a link to this page anywhere in the app so if you need to get back to
        it for some reason go to /info. There is an edge case bug where the two completion animations will play at the same time. However I don't think it's worth fixing for this demo,
        as it shouldn't occur in actual use often if at all. I may come back to it later when I have more time. 
      </p>
    </div>
  )
}

export default Info;