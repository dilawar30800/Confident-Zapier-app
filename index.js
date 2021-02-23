const authentication = require('./authentication');
const getClientsTrigger = require('./triggers/get_clients.js');
const getOrdersTrigger = require('./triggers/get_orders.js');
const getSamplesTrigger = require('./triggers/get_samples.js');
const getCompoundsTrigger = require('./triggers/get_compounds.js');
const testPackagesTrigger = require('./triggers/test_packages.js');
const getSampleTypesTrigger = require('./triggers/get_sample_types.js');
const sampleClassificationsTrigger = require('./triggers/sample_classifications.js');
const getTestTypesTrigger = require('./triggers/get_test_types.js');
const getSampleProductionMethodsTrigger = require('./triggers/get_sample_production_methods.js');
const placedOrderTrigger = require('./triggers/placed_order.js');
const orderWithInProgressStatusTrigger = require('./triggers/order_with_in_progress_status.js');
const orderWithCancelledStatusTrigger = require('./triggers/order_with_cancelled_status.js');
const orderWithCompletedStatuTrigger = require('./triggers/order_with_completed_statu.js');
const ordersAreNotCancelledTrigger = require('./triggers/orders_are_not_cancelled.js');
const orderStatusTrigger = require('./triggers/order_status.js');
const getLabCreate = require('./creates/get_lab.js');
const getSampleCreate = require('./creates/get_sample.js');
const getOrderCreate = require('./creates/get_order.js');
const getClientCreate = require('./creates/get_client.js');
const createNewOrderCreate = require('./creates/create_new_order.js');
const updateOrderCreate = require('./creates/update_order.js');
const uploadOrderDocumentCreate = require('./creates/upload_order_document.js');
const cancelOrderCreate = require('./creates/cancel_order.js');
const completeOrderCreate = require('./creates/complete_order.js');
const reviseOrderCreate = require('./creates/revise_order.js');
const uncancelOrderCreate = require('./creates/uncancel_order.js');
const unverifyOrderCreate = require('./creates/unverify_order.js');
const verifyOrderCreate = require('./creates/verify_order.js');
const createWeightOnHandCreate = require('./creates/create_weight_on_hand.js');
const updateASampleCreate = require('./creates/update_a_sample.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [getLabCreate.key]: getLabCreate,
    [getSampleCreate.key]: getSampleCreate,
    [getOrderCreate.key]: getOrderCreate,
    [getClientCreate.key]: getClientCreate,
    [createNewOrderCreate.key]: createNewOrderCreate,
    [updateOrderCreate.key]: updateOrderCreate,
    [uploadOrderDocumentCreate.key]: uploadOrderDocumentCreate,
    [cancelOrderCreate.key]: cancelOrderCreate,
    [completeOrderCreate.key]: completeOrderCreate,
    [reviseOrderCreate.key]: reviseOrderCreate,
    [uncancelOrderCreate.key]: uncancelOrderCreate,
    [unverifyOrderCreate.key]: unverifyOrderCreate,
    [verifyOrderCreate.key]: verifyOrderCreate,
    [createWeightOnHandCreate.key]: createWeightOnHandCreate,
    [updateASampleCreate.key]: updateASampleCreate,
  },
  triggers: {
    [getClientsTrigger.key]: getClientsTrigger,
    [getOrdersTrigger.key]: getOrdersTrigger,
    [getSamplesTrigger.key]: getSamplesTrigger,
    [getCompoundsTrigger.key]: getCompoundsTrigger,
    [testPackagesTrigger.key]: testPackagesTrigger,
    [getSampleTypesTrigger.key]: getSampleTypesTrigger,
    [sampleClassificationsTrigger.key]: sampleClassificationsTrigger,
    [getTestTypesTrigger.key]: getTestTypesTrigger,
    [getSampleProductionMethodsTrigger.key]: getSampleProductionMethodsTrigger,
    [placedOrderTrigger.key]: placedOrderTrigger,
    [orderWithInProgressStatusTrigger.key]: orderWithInProgressStatusTrigger,
    [orderWithCancelledStatusTrigger.key]: orderWithCancelledStatusTrigger,
    [orderWithCompletedStatuTrigger.key]: orderWithCompletedStatuTrigger,
    [ordersAreNotCancelledTrigger.key]: ordersAreNotCancelledTrigger,
    [orderStatusTrigger.key]: orderStatusTrigger,
  },
};
