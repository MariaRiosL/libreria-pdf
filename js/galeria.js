var imgData = 'data:image/jpg;udm,/ …';
doc.setFontSize(40);
doc.text(40, 20, "Octocat loves jsPDF");
doc.addImage(imgData, 'JPG', 10, 40, 180, 180);
