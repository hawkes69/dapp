function Info() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="font-bold text-xl w-full">About this App</h1>
      <br />
      <p className="text-gray-600">
        My wife and I recently moved to Orlando. We wanted to "100%" all of the parks here. Meaning we want to complete
        all of the rides, shows, and restaurants at all of the parks. This app was created to help us keep track of
        our progress. It is also a showcase of my web development skillset. 
        <br />
        <br />
        The tech stack for this app is: Ruby on Rails, React, Redux, TailwindCSS, and SQLite. 
        <br />
        <br />
        Feel free to click around this demo version. There are some fun animations at both area and item completions.
        <br />
        <br /> 
        <strong>Note:</strong> You can click on the park icons on the home page to see the progress for each park, as well as get to area 
        completion maps. I didn't feel like putting a link to this page anywhere in the app so if you need to get back to
        it for some reason go to /info.
      </p>
    </div>
  )
}

export default Info;