const Interviews = () => {
  const interviewArray = ['Spotify', 'Meta', 'Amazon', 'Discord', 'Netflix'];
  const newArr = interviewArray.map((interview) => {
    return <button>{interview}</button>
  })

  return (
    <>
    <div>Here are the list of interviews</div>
    <button>Add Interview</button>
    <br></br>
    {newArr}
    </>
  )
}

export default Interviews;