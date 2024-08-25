import cardimg from '../src/assets/images/cardimg.png';
import user from '../src/assets/images/userpic.png';

function App() {
  return (
    <main className="container px-4">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div id='card' className="card p-4" aria-labelledby="card-title">
            <img className="card-img-top" src={cardimg} alt="HTML & CSS foundations course" />
            <div className="card-body">
              <div className='learning'>
                <p>Learning</p>
              </div>
              <p className='date'>Published 21 Dec 2023</p>
              <h1 id="card-title" className="card-title">HTML & CSS Foundations</h1>
              <p className="card-text">
                These languages are the backbone of every website, defining structure, content, and presentation.
              </p>
            </div>
            <div className="card-footer">
              <img src={user} alt="Greg Hooper's profile picture" className="rounded-circle" style={{ width: '32px', height: '32px' }} />
              <span>Greg Hooper</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;