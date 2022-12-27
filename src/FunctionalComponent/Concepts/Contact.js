const Contact = (props) => {
  console.log(props);
  const allDetails = props;
  console.log("allDetails", allDetails);
  return (
    <div>
      <p>{allDetails.myData.age}</p>
    </div>
  );
};
export default Contact;
