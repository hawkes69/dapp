function Info() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="font-bold text-xl w-full">About this App</h1>
      <br />
      <p className="text-gray-600">
        My wife and I recently moved to Orlando. We wanted to "100%" all of the parks here. Meaning we want to complete
        all of the attractions, shows, and restaurants at all of the parks. This app was created to help us keep track of
        our progress. It is also a showcase of my web development skillset. 
        <br />
        <br />
        The tech stack for this app is: Ruby on Rails, React, Redux, TailwindCSS, and SQLite. 
        <br />
        <br />
        Feel free to click around this demo version. There are some fun animations at both area and item completions.
      </p>
    </div>
  )
}

export default Info;