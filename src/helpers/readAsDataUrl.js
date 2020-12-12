const readAsDataUrl = ({file, setState}) => {
  const fileReader = new FileReader();
  fileReader.onloadend = (e) => {
    if (e && e.target && e.target.result) setState(e.target.result.toString());
  };
  fileReader.readAsDataURL(file);
};

export default readAsDataUrl;
