const perform = (z, bundle) => {
  var order_id = bundle.inputData.order_id;
  const options = {
    url: 'https://api.confidentcannabis.com/v0/order/' + order_id,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // 'X-SIGNED': bundle.authData.signed,
      'X-ConfidentCannabis-APIKey': bundle.authData.api_key,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'order_id',
        label: 'Order ID',
        type: 'string',
        dynamic: 'get_orders.id.id',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      order: {
        address: {
          address_line_1: '123 a',
          address_line_2: '',
          city: 'beverly hills',
          id: 12944,
          state_abbreviation: 'CA',
          zipcode: '90210',
        },
        client: {
          email: 'hannah@kassenco.com',
          id: 3559,
          last_modified: '2018-09-27T17:30:54.182697',
          licenses: [
            {
              id: 8039,
              license_code: '',
              license_designation_name: 'Other',
              license_number: 'A11-05-000088',
              license_type_name: 'Other',
              nickname: "Hannah's Distribution",
            },
            {
              id: 6561,
              license_code: '',
              license_designation_name: 'Medical',
              license_number: 'e',
              license_type_name: 'Other',
              nickname: 'e',
            },
            {
              id: 1861,
              license_code: '',
              license_designation_name: 'Adult Use',
              license_number: '12345678',
              license_type_name: 'Other',
              nickname: '12345678',
            },
          ],
          name: "Hannah's Hemp",
          phone: null,
          primary_address: {
            address_line_1: '2000 Dab Dr.',
            address_line_2: '',
            city: 'SF',
            id: 23942,
            state_abbreviation: 'OR',
            zipcode: '97230',
          },
          training: true,
          url: '',
        },
        client_id: 3559,
        client_license_number: null,
        comments: null,
        completed_date: '2018-07-02T19:19:40.123529',
        completed_message: null,
        discount: 0,
        files: [],
        id: '1806ITL0003',
        lab_adjustment: 0,
        lab_license_number: '1234567890',
        last_modified: '2018-07-11T15:15:47.935761',
        lims_id: null,
        logs: [
          {
            log_time: '2018-06-15T14:40:10.504637',
            message: 'Created Order',
            user_id: 5778,
            user_name: 'Austin Chustz',
          },
          {
            log_time: '2018-07-02T15:09:32.215432',
            message: 'Received Order',
            user_id: 1421,
            user_name: 'Collin Green',
          },
          {
            log_time: '2018-07-02T15:09:51.276080',
            message: 'Completed Order',
            user_id: 1421,
            user_name: 'Collin Green',
          },
          {
            log_time: '2018-07-02T17:07:56.562030',
            message: 'Revised Order',
            user_id: 18865,
            user_name: 'M M',
          },
          {
            log_time: '2018-07-02T17:08:15.081922',
            message: 'Completed Order',
            user_id: 18865,
            user_name: 'M M',
          },
          {
            log_time: '2018-07-02T19:18:56.382280',
            message: 'Revised Order',
            user_id: 18865,
            user_name: 'M M',
          },
          {
            log_time: '2018-07-02T19:19:40.722189',
            message: 'Completed Order',
            user_id: 18865,
            user_name: 'M M',
          },
        ],
        ordered_date: '2018-06-15T14:40:09.136861',
        pickup: false,
        rejected_message: null,
        sales_tax_cents: 0,
        sales_tax_rate: 0,
        samples: [
          {
            batch_id: null,
            batch_size: null,
            batch_size_unit: 'g',
            client_id: 3559,
            coa: null,
            coa_additions: [],
            coa_draft: null,
            container_description: null,
            cover_image: null,
            custom_field: null,
            date_samples_collected: null,
            harvest_id: null,
            has_coa: false,
            has_coa_draft: false,
            has_lab_data: false,
            has_lab_data_draft: false,
            id: '1806ITL0003.0017',
            images: [],
            initial_weight: null,
            initial_weight_unit: 'g',
            lab: { id: 3, name: 'Internal Testing Lab' },
            last_modified: '2018-07-02T15:09:32.045609',
            lims_id: null,
            logs: [],
            lot_id: null,
            lot_size: null,
            lot_size_unit: 'g',
            manifest_id: null,
            notes: null,
            order_id: '1806ITL0003',
            order_lims_id: null,
            order_status_id: 4,
            order_status_name: 'Completed',
            production_date: null,
            production_method_id: 1,
            production_method_name: 'Indoor',
            production_run_id: null,
            production_run_size: null,
            production_run_size_unit: 'g',
            public_url:
              'https://orders.confidentcannabis.com/report/public/sample/2561ac64-bda5-4fe4-80dd-fe3500ac12eb',
            regulator_batch_id: null,
            regulator_batch_id2: null,
            regulator_lot_id: null,
            regulator_sample_id: null,
            regulator_sample_id2: null,
            regulatory_category_id: null,
            sample_category_id: 1,
            sample_category_name: 'Plant',
            sample_name: 'not a kitty',
            sample_type_id: 1,
            sample_type_name: 'Flower - Cured',
            servings_per_container: null,
            solvents_used: null,
            strain_name: 'Blue Dream',
            test_packages: [{ id: 5690, name: 'CAN + MIC + PES only' }],
            test_types: [
              { abbreviation: 'PES-A', id: 12, name: 'Additional Pesticides' },
              { abbreviation: 'MIC-R', id: 4, name: 'Required Microbials' },
              { abbreviation: 'MIC-A', id: 13, name: 'Additional Microbials' },
              { abbreviation: 'PES-R', id: 5, name: 'Required Pesticides' },
              { abbreviation: 'CAN', id: 1, name: 'Cannabinoids' },
            ],
            unit_description: null,
            units_per_serving: null,
            weight_on_hand: null,
            weight_on_hand_unit: 'g',
          },
          {
            batch_id: null,
            batch_size: null,
            batch_size_unit: 'g',
            client_id: 3559,
            coa: null,
            coa_additions: [],
            coa_draft: null,
            container_description: null,
            cover_image: null,
            custom_field: null,
            date_samples_collected: null,
            harvest_id: null,
            has_coa: false,
            has_coa_draft: false,
            has_lab_data: false,
            has_lab_data_draft: false,
            id: '1806ITL0003.0018',
            images: [],
            initial_weight: null,
            initial_weight_unit: 'g',
            lab: { id: 3, name: 'Internal Testing Lab' },
            last_modified: '2018-07-02T15:09:32.186701',
            lims_id: null,
            logs: [],
            lot_id: null,
            lot_size: null,
            lot_size_unit: 'g',
            manifest_id: null,
            notes: null,
            order_id: '1806ITL0003',
            order_lims_id: null,
            order_status_id: 4,
            order_status_name: 'Completed',
            production_date: null,
            production_method_id: 1,
            production_method_name: 'Indoor',
            production_run_id: null,
            production_run_size: null,
            production_run_size_unit: 'g',
            public_url:
              'https://orders.confidentcannabis.com/report/public/sample/dabc0d09-412e-4dc6-8517-3bb4ac3346d5',
            regulator_batch_id: null,
            regulator_batch_id2: null,
            regulator_lot_id: null,
            regulator_sample_id: null,
            regulator_sample_id2: null,
            regulatory_category_id: null,
            sample_category_id: 1,
            sample_category_name: 'Plant',
            sample_name: 'Wolfgang',
            sample_type_id: 1,
            sample_type_name: 'Flower - Cured',
            servings_per_container: null,
            solvents_used: null,
            strain_name: 'Wolfgang Test 1',
            test_packages: [{ id: 5690, name: 'CAN + MIC + PES only' }],
            test_types: [
              { abbreviation: 'PES-A', id: 12, name: 'Additional Pesticides' },
              { abbreviation: 'MIC-R', id: 4, name: 'Required Microbials' },
              { abbreviation: 'MIC-A', id: 13, name: 'Additional Microbials' },
              { abbreviation: 'PES-R', id: 5, name: 'Required Pesticides' },
              { abbreviation: 'CAN', id: 1, name: 'Cannabinoids' },
            ],
            unit_description: null,
            units_per_serving: null,
            weight_on_hand: null,
            weight_on_hand_unit: 'g',
          },
        ],
        secondary_client_address: null,
        secondary_client_license: null,
        secondary_client_name: null,
        secondary_client_type: null,
        status_id: 4,
        status_name: 'Completed',
        subtotal_cents: 200,
        total_price_cents: 200,
        verified_date: '2018-07-02T15:09:31.887766',
        verified_message: null,
      },
      success: true,
    },
    outputFields: [
      { key: 'order__address__address_line_1' },
      { key: 'order__address__address_line_2' },
      { key: 'order__address__city' },
      { key: 'order__address__id' },
      { key: 'order__address__state_abbreviation' },
      { key: 'order__address__zipcode' },
      { key: 'order__client__email' },
      { key: 'order__client__id' },
      { key: 'order__client__last_modified' },
      { key: 'order__client__licenses[]id' },
      { key: 'order__client__licenses[]license_code' },
      { key: 'order__client__licenses[]license_designation_name' },
      { key: 'order__client__licenses[]license_number' },
      { key: 'order__client__licenses[]license_type_name' },
      { key: 'order__client__licenses[]nickname' },
      { key: 'order__client__name' },
      { key: 'order__client__phone' },
      { key: 'order__client__primary_address__address_line_1' },
      { key: 'order__client__primary_address__address_line_2' },
      { key: 'order__client__primary_address__city' },
      { key: 'order__client__primary_address__id' },
      { key: 'order__client__primary_address__state_abbreviation' },
      { key: 'order__client__primary_address__zipcode' },
      { key: 'order__client__training' },
      { key: 'order__client__url' },
      { key: 'order__client_id' },
      { key: 'order__client_license_number' },
      { key: 'order__comments' },
      { key: 'order__completed_date' },
      { key: 'order__completed_message' },
      { key: 'order__discount' },
      { key: 'order__id' },
      { key: 'order__lab_adjustment' },
      { key: 'order__lab_license_number' },
      { key: 'order__last_modified' },
      { key: 'order__lims_id' },
      { key: 'order__logs[]log_time' },
      { key: 'order__logs[]message' },
      { key: 'order__logs[]user_id' },
      { key: 'order__logs[]user_name' },
      { key: 'order__ordered_date' },
      { key: 'order__pickup' },
      { key: 'order__rejected_message' },
      { key: 'order__sales_tax_cents' },
      { key: 'order__sales_tax_rate' },
      { key: 'order__samples[]batch_id' },
      { key: 'order__samples[]batch_size' },
      { key: 'order__samples[]batch_size_unit' },
      { key: 'order__samples[]client_id' },
      { key: 'order__samples[]coa' },
      { key: 'order__samples[]coa_draft' },
      { key: 'order__samples[]container_description' },
      { key: 'order__samples[]cover_image' },
      { key: 'order__samples[]custom_field' },
      { key: 'order__samples[]date_samples_collected' },
      { key: 'order__samples[]harvest_id' },
      { key: 'order__samples[]has_coa' },
      { key: 'order__samples[]has_coa_draft' },
      { key: 'order__samples[]has_lab_data' },
      { key: 'order__samples[]has_lab_data_draft' },
      { key: 'order__samples[]id' },
      { key: 'order__samples[]initial_weight' },
      { key: 'order__samples[]initial_weight_unit' },
      { key: 'order__samples[]lab__id' },
      { key: 'order__samples[]lab__name' },
      { key: 'order__samples[]last_modified' },
      { key: 'order__samples[]lims_id' },
      { key: 'order__samples[]lot_id' },
      { key: 'order__samples[]lot_size' },
      { key: 'order__samples[]lot_size_unit' },
      { key: 'order__samples[]manifest_id' },
      { key: 'order__samples[]notes' },
      { key: 'order__samples[]order_id' },
      { key: 'order__samples[]order_lims_id' },
      { key: 'order__samples[]order_status_id' },
      { key: 'order__samples[]order_status_name' },
      { key: 'order__samples[]production_date' },
      { key: 'order__samples[]production_method_id' },
      { key: 'order__samples[]production_method_name' },
      { key: 'order__samples[]production_run_id' },
      { key: 'order__samples[]production_run_size' },
      { key: 'order__samples[]production_run_size_unit' },
      { key: 'order__samples[]public_url' },
      { key: 'order__samples[]regulator_batch_id' },
      { key: 'order__samples[]regulator_batch_id2' },
      { key: 'order__samples[]regulator_lot_id' },
      { key: 'order__samples[]regulator_sample_id' },
      { key: 'order__samples[]regulator_sample_id2' },
      { key: 'order__samples[]regulatory_category_id' },
      { key: 'order__samples[]sample_category_id' },
      { key: 'order__samples[]sample_category_name' },
      { key: 'order__samples[]sample_name' },
      { key: 'order__samples[]sample_type_id' },
      { key: 'order__samples[]sample_type_name' },
      { key: 'order__samples[]servings_per_container' },
      { key: 'order__samples[]solvents_used' },
      { key: 'order__samples[]strain_name' },
      { key: 'order__samples[]test_packages[]id' },
      { key: 'order__samples[]test_packages[]name' },
      { key: 'order__samples[]test_types[]abbreviation' },
      { key: 'order__samples[]test_types[]id' },
      { key: 'order__samples[]test_types[]name' },
      { key: 'order__samples[]unit_description' },
      { key: 'order__samples[]units_per_serving' },
      { key: 'order__samples[]weight_on_hand' },
      { key: 'order__samples[]weight_on_hand_unit' },
      { key: 'order__secondary_client_address' },
      { key: 'order__secondary_client_license' },
      { key: 'order__secondary_client_name' },
      { key: 'order__secondary_client_type' },
      { key: 'order__status_id' },
      { key: 'order__status_name' },
      { key: 'order__subtotal_cents' },
      { key: 'order__total_price_cents' },
      { key: 'order__verified_date' },
      { key: 'order__verified_message' },
      { key: 'success' },
    ],
  },
  key: 'get_order',
  noun: 'Order',
  display: {
    label: 'Find Order by ID',
    description: 'This will get the order on basis of Order ID',
    hidden: false,
    important: false,
  },
};
