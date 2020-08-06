module.exports.getFileName = (
  fileName,
  fileExtension,
  vacancyId,
  separator = ":::"
) => {
  const fileModifiedName = getFileModifiedName(fileName, separator);
  let fileNewName = `${fileModifiedName}${separator}${vacancyId}${fileExtension}`;
  const separatorLastIndex = fileModifiedName.length - separator.length;
  if (fileModifiedName.substr(separatorLastIndex) === separator) {
    fileNewName = `${fileModifiedName}${vacancyId}${fileExtension}`;
  }
  return fileNewName;
};

getFileModifiedName = (file, separator) => {
  return file
    .trim()
    .replace(/[$&+,:;=?@#|'<>.^*()%!–_]/g, " ")
    .replace(/[ ]+/g, `${separator}`)
    .replace(`[${separator}]+`, `${separator}`);
};
