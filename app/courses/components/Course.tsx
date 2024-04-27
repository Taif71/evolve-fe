import { data } from "@/utils/data";

const Course = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="row">          
            <table className="mt-2 table table-border">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semester</th>
                  <th>Campus</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row: any, index: any) => (
                  <tr key={index}>
                    <td>{row.year}</td>
                    <td>{row.semester}</td>
                    <td>{row.campus}</td>
                    <td>{row.course}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="mt-5 row">
              <h2>DIPLOMA OF COUNSELLING SUBJECTS</h2>
              <h3>01 - Foundations of Counselling</h3>
              <p>Foundations of Couselling is the foundation subject of the unique and inspiring  CHC51015 Diploma of counselling  offered by evolve college</p>
  
              <h3>02 - Developing the Counselling Relationship</h3>
              <p>In Subject 2, you will learn how to facilitate a counselling relationship and process with a client, and support  your clients in their decision processes.</p>
  
              <h3>03 - Professionalism, Diversity and Inclusiveness</h3>
              <p>In Subject 3, you will learn how to work in counselling legally, work with a diverse range of people, promote Aboriginal and straight Islander cultural safety, and reflect on and improve your own professional practice</p>
  
              <h3>04 - Theories of Counselling</h3>
              <p>Foundations of Couselling is the foundation subject of the unique and inspiring  CHC51015 Diploma of counselling  offered by evolve college</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Course;