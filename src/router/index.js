import { createRouter, createWebHistory } from 'vue-router'


//용돈
//ReceiveMessage SendMessage
import AllowanceMain from '../pages/allowance/AllowanceMain.vue'
import MessageSendAllowance from '../pages/allowance/MessageSendAllowance.vue'
import MessageReceiveAllowance from '../pages/allowance/MessageReceiveAllowance.vue'
import MoneyAllowance from '../pages/allowance/MoneyAllowance.vue'
import MonthlyPictureAllowance from '../pages/allowance/MonthlyPictureAllowance.vue'
import ReceiveMessage from '../pages/allowance/ReceiveMessage.vue'
import SendMessage from '../pages/allowance/SendMessage.vue'
import DetailAllowanceModal from '../pages/allowance/DetailAllowanceModal.vue'


//예산 CategoryAdd EmptyMonthly EmptySpecial MonthlyMain Monthlyplan SpecialMain 
//AddSpecial DetailMonthlyType SpecialSearch
import BudgetMain from '../pages/budget/BudgetMain.vue' 
import AddSpecial from '../pages/budget/AddSpecial.vue'
import CategoryAdd from '../pages/budget/CategoryAdd.vue'
import DetailMonthlyType from '../pages/budget/DetailMonthlyType.vue'
import EmptyMonthly from '../pages/budget/EmptyMonthly.vue'
import EmptySpecial from '../pages/budget/EmptySpecial.vue'
import MonthlyMain from '../pages/budget/MonthlyMain.vue'
import Monthlyplan from '../pages/budget/Monthlyplan.vue'
import SpecialMain from '../pages/budget/SpecialMain.vue'
import SpecialSearch from '../pages/budget/SpecialSearch.vue'
import DetailSpecial from '../pages/budget/DetailSpecial.vue'

//모금 CompletedFundMain CreateFund DetailFund EnterFundModal FundInfo FundMain FundSearch MyCompletedFund MyFund RequestFundModal
//FundInfoModal
import CompletedFundMain from '../pages/Fund/CompletedFundMain.vue'
import CreateFund from '../pages/Fund/CreateFund.vue'
import DetailFund from '../pages/Fund/DetailFund.vue'
import FundInfo from '../pages/Fund/FundInfo.vue'
import FundMain from '../pages/Fund/FundMain.vue'
import FundSearch from '../pages/Fund/FundSearch.vue'
import MyCompletedFund from '../pages/Fund/MyCompletedFund.vue'
import MyFund from '../pages/Fund/MyFund.vue'


// 내역 AnalysisOfIncome AnalysisOfOutcome ListMain ListModal ListModalMonthly ListSearch TypeAddModal TypeSpecialAddModal
//AddIncome AddOutcome DateList DetailMyList DetailDateList IncomeTypeList MyList OutcomeTypeList
import AddIncome from '../pages/list/AddIncome.vue'
import AddOutcome from '../pages/list/AddOutcome.vue'
import AllTypeOfIncome from '../pages/list/AllTypeOfIncome .vue'
import AllTypeOfOutcome from '../pages/list/AllTypeOfOutcome.vue'
import AnalysisOfIncome from '../pages/list/AnalysisOfIncome.vue'
import AnalysisOfOutcome from '../pages/list/AnalysisOfOutcome.vue'
import DateList from '../pages/list/DateList.vue'
import DetailMyList from '../pages/list/DetailMyList.vue'
import DetailDateList from '../pages/list/DetailDateList.vue'
import IncomeTypeList from '../pages/list/IncomeTypeList.vue'
import ListMain from '../pages/list/ListMain.vue'
import ListSearch from '../pages/list/ListSearch.vue'
import MyList from '../pages/list/MyList.vue'
import OutcomeTypeList from '../pages/list/OutcomeTypeList.vue'

//미션 CompletedMissionMain MissionInfo MissionMain MissionSearch MyCompletedMission MyMission
//CreateMission DetailMission
import CompletedMissionMain from '../pages/mission/CompletedMissionMain.vue'
import CreateMission from '../pages/mission/CreateMission.vue'
import DetailMission from '../pages/mission/DetailMission.vue'
import MissionInfo from '../pages/mission/MissionInfo.vue'
import MissionMain from '../pages/mission/MissionMain.vue'
import MissionSearch from '../pages/mission/MissionSearch.vue'
import MyCompletedMission from '../pages/mission/MyCompletedMission.vue'
import MyMission from '../pages/mission/MyMission.vue'

//import ButtomTab from '../component/ButtomTab.vue'

        
const routes = [
    { path: '/', component: FundMain},
    //용돈 //ReceiveMessage SendMessage
    { path: '/allowanceMain', component: AllowanceMain},
    { path: '/messageSendAllowance', component: MessageSendAllowance },
    { path: '/messageReceiveAllowance', component: MessageReceiveAllowance },
    { path: '/moneyAllowance', component: MoneyAllowance },
    { path: '/monthlyPictureAllowance', component: MonthlyPictureAllowance },
    { path: '/receiveMessage', component: ReceiveMessage },
    { path: '/sendMessage', component: SendMessage },
    { path: '/detailAllowanceModal', component: DetailAllowanceModal },

    //예산 AddSpecial DetailMonthlyType SpecialSearch
    { path: '/budgetMain', component: BudgetMain },
    { path: '/addSpecial', component: AddSpecial },
    { path: '/categoryAdd', component: CategoryAdd },
    { path: '/detailMonthlyType', component: DetailMonthlyType },
    { path: '/emptyMonthly', component: EmptyMonthly },
    { path: '/emptySpecial', component: EmptySpecial },
    { path: '/monthlyMain', component: MonthlyMain},
    { path: '/monthlyplan', component: Monthlyplan },
    { path: '/specialMain', component: SpecialMain },
    { path: '/specialSearch', component: SpecialSearch },
    { path: '/detailSpecial', component: DetailSpecial },
    
    //모금 
    { path: '/completedFundMain', component: CompletedFundMain },
    { path: '/createFund', component: CreateFund },
    { path: '/detailFund', component: DetailFund },
    { path: '/fundInfo', component: FundInfo },
    { path: '/fundMain', component: FundMain},
    { path: '/fundSearch', component: FundSearch },
    { path: '/myCompletedFund', component: MyCompletedFund },
    { path: '/myFund', component: MyFund },
    
    //내역 
    //AddIncome AddOutcome DateList DetailMyList DetailDateList 
    //IncomeTypeList MyList OutcomeTypeList
    { path: '/addIncome', component: AddIncome },
    { path: '/addOutcome', component: AddOutcome },
    { path: '/allTypeOfIncome', component:AllTypeOfIncome },
    { path: '/allTypeOfOutcome', component:AllTypeOfOutcome },
    { path: '/analysisOfIncome',component: AnalysisOfIncome },
    { path: '/analysisOfOutcome', component: AnalysisOfOutcome },
    { path: '/dateList', component: DateList },
    { path: '/detailMyList', component: DetailMyList },
    { path: '/detailDateList', component: DetailDateList },
    { path: '/incomeTypeList', component: IncomeTypeList },
    { path: '/listMain', component: ListMain },
    { path: '/listSearch', component: ListSearch },
    { path: '/myList', component: MyList },
    { path: '/outcomeTypeList', component: OutcomeTypeList },
    


    //미션 //CreateMission DetailMission
    { path: '/completedMissionMain', component: CompletedMissionMain },
    { path: '/createMission', component: CreateMission },
    { path: '/detailMission', component: DetailMission },
    { path: '/missionInfo', component: MissionInfo },
    { path: '/missionMain', component: MissionMain },
    { path: '/missionSearch', component: MissionSearch },
    { path: '/myCompletedMission', component: MyCompletedMission },
    { path: '/myMission', component: MyMission },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
