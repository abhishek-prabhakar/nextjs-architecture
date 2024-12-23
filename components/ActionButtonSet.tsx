export default function ActionButtonSet({
  id,
  enableDeleteBtn,
  enableEditBtn,
  children,
}: {
  id: string;
  enableDeleteBtn?: boolean;
  enableEditBtn?: boolean;
  children?: {
    deleteBtn?: JSX.Element;
    editBtn?: JSX.Element;
    rightSection?: JSX.Element;
  };
}) {
  const delBtnEl = enableDeleteBtn
    ? children?.deleteBtn || <text>delete</text>
    : '';
  const editBtnEl = enableEditBtn ? children?.editBtn || <text>edit</text> : '';
  const rightSection = children?.rightSection;

  return (
    <>
      {id} Perform:
      {delBtnEl}
      {editBtnEl}
      {rightSection}
      <hr />
    </>
  );
}
