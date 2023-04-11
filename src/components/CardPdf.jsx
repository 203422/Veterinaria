import React from 'react';

import imgD from "../assets/img/docs.jpg"

const CardPdf = ({ evidence }) => {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  
    const handleCardClick = () => {
      window.open(evidence.url, '_blank');
    };

  return (
    // <Card>
    //   {/* <Document evidence={evidence} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={1} width={150} />
    //   </Document> */}
    //   <Card.Body>
    //     <Card.Title>{evidence.nombre}</Card.Title>
    //     {/* <Card.Text>Pages: {numPages}</Card.Text> */}
    //     <Button variant="primary">View PDF</Button>
    //   </Card.Body>
    // </Card>
     <div>
     <div style={{cursor: "pointer"}}onClick = {handleCardClick}  className="card size-card-fases">
         <div className="card-body shadow bg-body-tertiary rounded">
             <img src={imgD} className="img-fases"/>
             <h5 className="font" readonly>{evidence.nombre}</h5>
           
         </div>
     </div>

 </div>
  );
};

export default CardPdf;






