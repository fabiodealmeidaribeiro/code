const { cep, cnh, cnpj, cpf, passport, phone, rg, uf } = require('../database/option')['lengths'];
const { description } = require('../database/option')['lorem'];

const getIDColumns = (Sequelize) => {
    return {
        id : {
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
            type : Sequelize.INTEGER,
        },
    };
};

const getDateColumns = (Sequelize) => {
    return {
        startdate : {
            allowNull : false,
            type : Sequelize.DATE,
        },
        enddate : {
            allowNull : false,
            type : Sequelize.DATE,
        },
        starttime : {
            allowNull : false,
            type : Sequelize.TIME,
        },
        endtime : {
            allowNull : false,
            type : Sequelize.TIME,
        },
    };
};

const getAddressColumns = (Sequelize) => {
    return {
        cep : Sequelize.STRING(cep),
        address : Sequelize.STRING,
        number : Sequelize.INTEGER,
        district : Sequelize.STRING,
        city : Sequelize.STRING,
        state : Sequelize.STRING(uf),
    };
};

const getContactColumns = (Sequelize) => {
    return {
        email : Sequelize.STRING,
        phone : Sequelize.STRING(phone),
    };
};

const getCostColumns = (Sequelize) => {
    return {
        cost : Sequelize.INTEGER,
    };
};

const getCreateColumns = (Sequelize) => {
    return {
        createdAt : {
            allowNull : false,
            defaultValue : Sequelize.NOW,
            type : Sequelize.DATE,
        },
        updatedAt : {
            allowNull : false,
            defaultValue : Sequelize.NOW,
            type : Sequelize.DATE,
        },
    }
};

const getPictureColumns = (Sequelize) => {
    return {
        picture : Sequelize.STRING,
    };
};

const getProfileColumns = (Sequelize) => {
    return {
        title : {
            allowNull : false,
            type : Sequelize.STRING,
        },
        description : {
            allowNull : false,
            defaultValue : description,
            type : Sequelize.TEXT,
        },
    };
};

const getStateColumns = (Sequelize) => {
    return {
        approved : {
            allowNull : false,
            defaultValue : true,
            type : Sequelize.BOOLEAN,
        },
        deleted : {
            allowNull : false,
            defaultValue : false,
            type : Sequelize.BOOLEAN,
        },
        disable : {
            allowNull : false,
            defaultValue : false,
            type : Sequelize.BOOLEAN,
        },
    }
};

const getAccessColumns = (Sequelize) => {
    return {
        accesskey : {
            allowNull : false,
            type : Sequelize.STRING,
        },
        password : {
            allowNull : false,
            type : Sequelize.STRING,
        },
        confirmation : {
            allowNull : false,
            type : Sequelize.STRING,
        },
    };
};

const getAddColumns = (Sequelize) => {
    return {
        gender : Sequelize.STRING,
        birthdate : Sequelize.DATE,
        status : Sequelize.STRING,
    };
};

const getCompanyColumns = (Sequelize, Entity) => {
    return {
        cnpj : Sequelize.STRING(cnpj),
        fantasy : Sequelize.STRING,
        company : Sequelize.STRING,
    };
};

const getCurriculumColumns = (Sequelize) => {
    return {
        profession : Sequelize.STRING,
        curriculum : {
            defaultValue : description,
            type : Sequelize.TEXT,
        },
        salary : Sequelize.STRING,
    };
};

const getDocumentColumns = (Sequelize) => {
    return {
        cnh : Sequelize.STRING(cnh),
        cpf : Sequelize.STRING(cpf),
        passport : Sequelize.STRING(passport),
        rg : Sequelize.STRING(rg),
    };
};

const getLevelColumns = (Sequelize) => {
    return {
        level : {
            defaultValue : '0',
            type : Sequelize.INTEGER,
        },
    };
};

// -----

const getModelCategory = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        fk_public : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        ...getProfileColumns(Sequelize),
        ...getPictureColumns(Sequelize),
        ...getCreateColumns(Sequelize),
        ...getStateColumns(Sequelize),
    };
};

const getModelItem = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        fk_order : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        fk_event : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        fk_product : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        fk_service : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        ...getStateColumns(Sequelize),
        ...getCreateColumns(Sequelize),
    };
};

const getModelOrder = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        fk_public : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        ...getStateColumns(Sequelize),
        ...getCreateColumns(Sequelize),
    };
};

const getModelPublic = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        ...getProfileColumns(Sequelize),
        ...getPictureColumns(Sequelize),
        ...getAddColumns(Sequelize),
        ...getDocumentColumns(Sequelize),
        ...getAddressColumns(Sequelize),
        ...getContactColumns(Sequelize),
        ...getCurriculumColumns(Sequelize),
        ...getCompanyColumns(Sequelize),
        ...getAccessColumns(Sequelize),
        ...getLevelColumns(Sequelize),
        ...getStateColumns(Sequelize),
        ...getCreateColumns(Sequelize),
    };
};

const getForeignKey = (Sequelize) => {
    return {
        fk_category : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
        fk_public : {
            allowNull : false,
            type : Sequelize.INTEGER,
        },
    };
};

const getModelEvent = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        ...getForeignKey(Sequelize),
        ...getProfileColumns(Sequelize),
        ...getPictureColumns(Sequelize),
        ...getCostColumns(Sequelize),
        ...getDateColumns(Sequelize),
        ...getAddressColumns(Sequelize),
        ...getCreateColumns(Sequelize),
        ...getStateColumns(Sequelize),
    };
};

const getModelProduct = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        ...getForeignKey(Sequelize),
        ...getProfileColumns(Sequelize),
        ...getPictureColumns(Sequelize),
        ...getCostColumns(Sequelize),
        ...getStateColumns(Sequelize),
        ...getCreateColumns(Sequelize),
    };
};

const getModelService = (Sequelize) => {
    return {
        ...getIDColumns(Sequelize),
        ...getForeignKey(Sequelize),
        ...getProfileColumns(Sequelize),
        ...getPictureColumns(Sequelize),
        ...getCostColumns(Sequelize),
        ...getStateColumns(Sequelize),
        ...getCreateColumns(Sequelize),
    };
};

module.exports = {
    getModelOrder,
    getModelItem,
    getModelCategory,
    getModelPublic,
    getModelEvent,
    getModelProduct,
    getModelService,
};