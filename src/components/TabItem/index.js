// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    onChangeActiveTab(tabId)
  }
  const activeTabStyle = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabStyle}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
