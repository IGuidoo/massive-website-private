export const SplitLayout = ({ children, containerStyles, leftContainerStyles, rightContainerStyles }) => {
  const [left, right] = children

  return (
    <div className={` ${containerStyles}`}>
      <div className={` ${leftContainerStyles}`}>{left}</div>
      <div className={` ${rightContainerStyles} `}>{right}</div>
    </div>
  )
}

export default SplitLayout;