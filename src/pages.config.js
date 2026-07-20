/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Article from './pages/Article';
import Blog from './pages/Blog';
import CustomSolution from './pages/CustomSolution';
import FinancialModelGuide from './pages/FinancialModelGuide';
import Home from './pages/Home';
import OblikBudivnytstva from './pages/OblikBudivnytstva';
import OblikFinansiv from './pages/OblikFinansiv';
import OblikIT from './pages/OblikIT';
import OblikSalonuKrasy from './pages/OblikSalonuKrasy';
import OblikSkladu from './pages/OblikSkladu';
import OblikVyrobnytstva from './pages/OblikVyrobnytstva';
import Offer from './pages/Offer';
import Privacy from './pages/Privacy';
import ProductAgro from './pages/ProductAgro';
import ProductBeauty from './pages/ProductBeauty';
import ProductConstruction from './pages/ProductConstruction';
import ProductDemo from './pages/ProductDemo';
import ProductEcommerce from './pages/ProductEcommerce';
import ProductEstimate from './pages/ProductEstimate';
import ProductFinmodelDental from './pages/ProductFinmodelDental';
import ProductFinmodelEcommerce from './pages/ProductFinmodelEcommerce';
import ProductFinmodelManufacturing from './pages/ProductFinmodelManufacturing';
import ProductFinmodelRetail from './pages/ProductFinmodelRetail';
import ProductIT from './pages/ProductIT';
import ProductLite from './pages/ProductLite';
import ProductManufacturing from './pages/ProductManufacturing';
import ProductPro from './pages/ProductPro';
import ProductWarehouse from './pages/ProductWarehouse';
import Products from './pages/Products';
import done from './pages/done';
import CRM from './pages/CRM';
import CRMTrade from './pages/CRMTrade';
import CRMBeauty from './pages/CRMBeauty';
import CRMEcommerce from './pages/CRMEcommerce';
import CRMConstruction from './pages/CRMConstruction';
import CRMServices from './pages/CRMServices';
import CRMManufacturing from './pages/CRMManufacturing';
import AccountingAgro from './pages/AccountingAgro';
import AccountingFurniture from './pages/AccountingFurniture';
import AccountingSchool from './pages/AccountingSchool';
import AccountingLegal from './pages/AccountingLegal';
import AccountingRecruiting from './pages/AccountingRecruiting';
import AccountingAutoService from './pages/AccountingAutoService';
import AccountingConstruction from './pages/AccountingConstruction';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Article": Article,
    "Blog": Blog,
    "CustomSolution": CustomSolution,
    "FinancialModelGuide": FinancialModelGuide,
    "Home": Home,
    "OblikBudivnytstva": OblikBudivnytstva,
    "OblikFinansiv": OblikFinansiv,
    "OblikIT": OblikIT,
    "OblikSalonuKrasy": OblikSalonuKrasy,
    "OblikSkladu": OblikSkladu,
    "OblikVyrobnytstva": OblikVyrobnytstva,
    "Offer": Offer,
    "Privacy": Privacy,
    "ProductAgro": ProductAgro,
    "ProductBeauty": ProductBeauty,
    "ProductConstruction": ProductConstruction,
    "ProductDemo": ProductDemo,
    "ProductEcommerce": ProductEcommerce,
    "ProductEstimate": ProductEstimate,
    "ProductFinmodelDental": ProductFinmodelDental,
    "ProductFinmodelEcommerce": ProductFinmodelEcommerce,
    "ProductFinmodelManufacturing": ProductFinmodelManufacturing,
    "ProductFinmodelRetail": ProductFinmodelRetail,
    "ProductIT": ProductIT,
    "ProductLite": ProductLite,
    "ProductManufacturing": ProductManufacturing,
    "ProductPro": ProductPro,
    "ProductWarehouse": ProductWarehouse,
    "Products": Products,
    "done": done,
    "CRM": CRM,
    "CRMTrade": CRMTrade,
    "CRMBeauty": CRMBeauty,
    "CRMEcommerce": CRMEcommerce,
    "CRMConstruction": CRMConstruction,
    "CRMServices": CRMServices,
    "CRMManufacturing": CRMManufacturing,
    "AccountingAgro": AccountingAgro,
    "AccountingFurniture": AccountingFurniture,
    "AccountingSchool": AccountingSchool,
    "AccountingLegal": AccountingLegal,
    "AccountingRecruiting": AccountingRecruiting,
    "AccountingAutoService": AccountingAutoService,
    "AccountingConstruction": AccountingConstruction,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};