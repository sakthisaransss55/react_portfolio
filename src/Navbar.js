import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navbar from 'react-bootstrap/navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
return(
  // <div className="navbar">
  //   <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	//     <div class="container">
	//       <a class="navbar-brand" href="https://www.linkedin.com/in/sakthisaran-s/" target="_blank">Sakthisaran S</a>
	//       <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	//         <span class="oi oi-menu"></span> Menu
	//       </button>

	//       <div class="collapse navbar-collapse" id="ftco-nav">
	//         <ul class="navbar-nav nav ml-auto">
	//           <li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
	//           <li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
	//           <li class="nav-item"><a href="#resume-section" class="nav-link"><span>Education</span></a></li>
	//           <li class="nav-item"><a href="#carrier" class="nav-link"><span>Carrier</span></a></li>
	//           <li class="nav-item"><a href="#skills-section" class="nav-link"><span>Skills</span></a></li>
	//           <li class="nav-item"><a href="#projects-section" class="nav-link"><span>Projects</span></a></li>
	//           <li class="nav-item"><a href="#contact-section" class="nav-link"><span>Contact</span></a></li>
	//         </ul>
	//       </div>
	//     </div>
	//   </nav>
  // </div>
  <navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <navbar.Brand href="#home">React-Bootstrap</navbar.Brand>
        <navbar.Toggle aria-controls="basic-navbar-nav" />
        <navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </navbar.Collapse>
      </Container>
    </navbar>
);
}

export default Navbar