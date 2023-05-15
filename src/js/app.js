export default function logCharacter({ special = [] }) {
// function logCharacter({ special = [] }) {
  const special1 = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;

    special1.push({
      id, name, icon, description,
    });
  });

  // console.log(special1);
  return special1;
}
