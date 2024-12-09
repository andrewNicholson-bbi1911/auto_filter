/// Step 0 - Задаём основные переменные
const refDirFilters = "references/filter_code_references";
const refDirRequests = "references/page_request";

const outDirFilters = "output/filters";
const outDirRequests = "output/page_request";

/// ====================================================
/// Step 1 - инициализируем генератор кода
import CodeGenerator from "./src/domain/code_generator.js";

//ToDo: Поменяйте здесь значения на соответствующие директивы
const referenceDirPath = refDirFilters;
const outputDirPath = outDirFilters;

const codeGenerator = new CodeGenerator(referenceDirPath, outputDirPath);


/// ====================================================
/// Step 2 - инициализируем генераторы generic данных
import ConsoleFilterGenericDataGenerator from "./src/domain/filters/filter_generic_data_generator/console_filter_generic_data_generator.js";
import ConsoleRequestGenericDataGenerator from "./src/domain/requests/reques_generic_data_generator/console_request_generic_data_generaotr.js";

const filterGenericDataGenerator = new ConsoleFilterGenericDataGenerator();
const requestGenericDataGenerator = new ConsoleRequestGenericDataGenerator();

//ToDo: Поменять на соответствующий генератор
const genericDataGenerator = filterGenericDataGenerator;

var genericFilterData = await genericDataGenerator.generateGenericData();

/// ====================================================
/// Step 3: генерируем сам код
import FilterMapSettings from "./src/data/model/filters/map_settings_model.js";
import RequestMapSettings from "./src/data/model/request/map_settings_model.js";

//ToDo: Поменять на соответствующий тип
const settingsType = FilterMapSettings;

var settingsValues = genericFilterData.generateSettingsValues();
console.log(settingsValues);

/// Тут происходит вся магия
codeGenerator.generateCode(settingsType.getReferenceSettingsNames(), settingsValues);
