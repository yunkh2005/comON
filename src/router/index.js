import { createRouter, createWebHistory } from 'vue-router'

//용돈
import AllowanceMain from '../pages/allowance/AllowanceMain.vue'
import MessageSendAllowance from '../pages/allowance/MessageSendAllowance.vue'
import MessageReceiveAllowance from '../pages/allowance/MessageReceiveAllowance.vue'
import MoneyAllowance from '../pages/allowance/MoneyAllowance.vue'
import MonthlyPictureAllowance from '../pages/allowance/MonthlyPictureAllowance.vue's

//예산 CategoryAdd EmptyMonthly EmptySpecial MonthlyMain Monthlyplan SpecialMain 
//AddSpecial DetailMonthlyType SpecialSearch 
import AddSpecial from '../pages/budget/AddSpecial.vue'
import CategoryAdd from '../pages/budget/CategoryAdd.vue'
import DetailMonthlyType from '../pages/budget/DetailMonthlyType.vue'
import EmptyMonthly from '../pages/budget/EmptyMonthly.vue'
import EmptySpecial from '../pages/budget/EmptySpecial.vue'
import MonthlyMain from '../pages/budget/MonthlyMain.vue'
import Monthlyplan from '../pages/budget/Monthlyplan.vue'
import SpecialMain from '../pages/budget/SpecialMain.vue'
import SpecialSearch from '../pages/budget/SpecialSearch.vue'

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
import AnalysisOfIncome from '../pages/list/AnalysisOfIncome.vue'
import AnalysisOfOutcome from '../pages/list/AnalysisOfOutcome.vue'
import DateList from '../pages/list/DateList.vue'
import DetailMyList from '../pages/list/DetailMyList.vue'
import DetailDateList from '../pages/list/DateList.vue'
import IncomeTypeList from '../pages/list/DateList.vue'
import ListMain from '../pages/list/ListMain.vue'
import ListSearch from '../pages/list/ListSearch.vue'
import MyList from '../pages/list/MyList.vue'
import OutcomeTypeList from '../pages/list/OutcomeTypeList.vue'



//미션 CompletedMissionMain MissionInfo MissionMain MissionSearch MyCompletedMission MyMission
import CompletedMissionMain from '../pages/mission/CompletedMissionMain.vue'
import MissionInfo from '../pages/mission/MissionInfo.vue'
import MissionMain from '../pages/mission/MissionMain.vue'
import MissionSearch from '../pages/mission/MissionSearch.vue'
import MyCompletedMission from '../pages/mission/MyCompletedMission.vue'
import MyMission from '../pages/mission/MyMission.vue'

//import ButtomTab from '../component/ButtomTab.vue'

const routes = [
    { path: '/', component: FundMain},
    //용돈
    { path: '/allowanceMain', component: AllowanceMain },
    { path: '/amountOfAllowanceModal', component: AmountOfAllowanceModal },
    { path: '/detailReceiveAllowanceModal', component: DetailReceiveAllowanceModal },
    { path: '/detailSendAllowanceModal', component: DetailSendAllowanceModal },
    { path: '/messageSendAllowance', component: MessageSendAllowance },
    { path: '/messageReceiveAllowance', component: MessageReceiveAllowance },
    { path: '/moneyAllowance', component: MoneyAllowance },
    { path: '/monthlyPictureAllowance', component: MonthlyPictureAllowance },
    { path: '/requestAllowanceModal', component: RequestAllowanceModal },

    //예산
    { path: '/categoryAdd', component: CategoryAdd },
    { path: '/emptyMonthly', component: EmptyMonthly },
    { path: '/emptySpecial', component: EmptySpecial },
    { path: '/monthlyMain', component: MonthlyMain },
    { path: '/monthlyplan', component: Monthlyplan },
    { path: '/specialMain', component: SpecialMain },
    
    //모금 
    { path: '/completedFundMain', component: CompletedFundMain },
    { path: '/createFund', component: CreateFund },
    { path: '/detailFund', component: DetailFund },
    { path: '/enterFundModal', component: EnterFundModal },
    { path: '/fundInfo', component: FundInfo },
    { path: '/fundMain', component: FundMain },
    { path: '/fundSearch', component: FundSearch },
    { path: '/myCompletedFund', component: MyCompletedFund },
    { path: '/myFund', component: MyFund },
    { path: '/requestFundModal', component: RequestFundModal },

    //내역 
    { path: '/analysisOfIncome',component: AnalysisOfIncome },
    { path: '/analysisOfOutcome', component: AnalysisOfOutcome },
    { path: '/listMain', component: ListMain },
    { path: '/listModal', component: ListModal },
    { path: '/listModalMonthly', component: ListModalMonthly },
    { path: '/listSearch', component: ListSearch },
    { path: '/typeAddModal', component: TypeAddModal },
    { path: '/typeSpecialAddModal', component: TypeSpecialAddModal },


    //미션 
    { path: '/completedMissionMain', component: CompletedMissionMain },
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
