const Skills = () => {
  const skillsArray = ['React', 'Express', 'Jest', 'React Testing Library', 'SQL', 'NoSQL'];
  const newArr = skillsArray.map((skill) => {
    return <button>{skill}</button>
  })

  return (
    <>
    <div>Here are a list of your skills!</div>
    <button>Add a skill</button>
    <br></br>
    {newArr}
    </>
  )
}

export default Skills;