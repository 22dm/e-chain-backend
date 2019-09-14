module.exports = (sequelize, DataTypes) =>
  sequelize.define('stock', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    day1date: {
      type: DataTypes.STRING(16)
    },
    day1value: {
      type: DataTypes.DOUBLE
    },
    day2date: {
      type: DataTypes.STRING(16)
    },
    day2value: {
      type: DataTypes.DOUBLE
    },
    day3date: {
      type: DataTypes.STRING(16)
    },
    day3value: {
      type: DataTypes.DOUBLE
    },
    day4date: {
      type: DataTypes.STRING(16)
    },
    day4value: {
      type: DataTypes.DOUBLE
    },
    day5date: {
      type: DataTypes.STRING(16)
    },
    day5value: {
      type: DataTypes.DOUBLE
    },
    day6date: {
      type: DataTypes.STRING(16)
    },
    day6value: {
      type: DataTypes.DOUBLE
    },
    day7date: {
      type: DataTypes.STRING(16)
    },
    day7value: {
      type: DataTypes.DOUBLE
    },
    day8date: {
      type: DataTypes.STRING(16)
    },
    day8value: {
      type: DataTypes.DOUBLE
    },
    day9date: {
      type: DataTypes.STRING(16)
    },
    day9value: {
      type: DataTypes.DOUBLE
    },
    day10date: {
      type: DataTypes.STRING(16)
    },
    day10value: {
      type: DataTypes.DOUBLE
    },
    day11date: {
      type: DataTypes.STRING(16)
    },
    day11value: {
      type: DataTypes.DOUBLE
    },
    day12date: {
      type: DataTypes.STRING(16)
    },
    day12value: {
      type: DataTypes.DOUBLE
    },
    day13date: {
      type: DataTypes.STRING(16)
    },
    day13value: {
      type: DataTypes.DOUBLE
    },
    day14date: {
      type: DataTypes.STRING(16)
    },
    day14value: {
      type: DataTypes.DOUBLE
    },
    day15date: {
      type: DataTypes.STRING(16)
    },
    day15value: {
      type: DataTypes.DOUBLE
    },
    day16date: {
      type: DataTypes.STRING(16)
    },
    day16value: {
      type: DataTypes.DOUBLE
    },
    day17date: {
      type: DataTypes.STRING(16)
    },
    day17value: {
      type: DataTypes.DOUBLE
    },
    day18date: {
      type: DataTypes.STRING(16)
    },
    day18value: {
      type: DataTypes.DOUBLE
    },
    day19date: {
      type: DataTypes.STRING(16)
    },
    day19value: {
      type: DataTypes.DOUBLE
    },
    day20date: {
      type: DataTypes.STRING(16)
    },
    day20value: {
      type: DataTypes.DOUBLE
    },
    week1date: {
      type: DataTypes.STRING(16)
    },
    week1value: {
      type: DataTypes.DOUBLE
    },
    week2date: {
      type: DataTypes.STRING(16)
    },
    week2value: {
      type: DataTypes.DOUBLE
    },
    week3date: {
      type: DataTypes.STRING(16)
    },
    week3value: {
      type: DataTypes.DOUBLE
    },
    week4date: {
      type: DataTypes.STRING(16)
    },
    week4value: {
      type: DataTypes.DOUBLE
    },
    week5date: {
      type: DataTypes.STRING(16)
    },
    week5value: {
      type: DataTypes.DOUBLE
    },
    week6date: {
      type: DataTypes.STRING(16)
    },
    week6value: {
      type: DataTypes.DOUBLE
    },
    week7date: {
      type: DataTypes.STRING(16)
    },
    week7value: {
      type: DataTypes.DOUBLE
    },
    week8date: {
      type: DataTypes.STRING(16)
    },
    week8value: {
      type: DataTypes.DOUBLE
    },
    week9date: {
      type: DataTypes.STRING(16)
    },
    week9value: {
      type: DataTypes.DOUBLE
    },
    week10date: {
      type: DataTypes.STRING(16)
    },
    week10value: {
      type: DataTypes.DOUBLE
    },
    week11date: {
      type: DataTypes.STRING(16)
    },
    week11value: {
      type: DataTypes.DOUBLE
    },
    week12date: {
      type: DataTypes.STRING(16)
    },
    week12value: {
      type: DataTypes.DOUBLE
    },
    month1date: {
      type: DataTypes.STRING(16)
    },
    month1value: {
      type: DataTypes.DOUBLE
    },
    month2date: {
      type: DataTypes.STRING(16)
    },
    month2value: {
      type: DataTypes.DOUBLE
    },
    month3date: {
      type: DataTypes.STRING(16)
    },
    month3value: {
      type: DataTypes.DOUBLE
    },
    month4date: {
      type: DataTypes.STRING(16)
    },
    month4value: {
      type: DataTypes.DOUBLE
    },
    month5date: {
      type: DataTypes.STRING(16)
    },
    month5value: {
      type: DataTypes.DOUBLE
    },
    month6date: {
      type: DataTypes.STRING(16)
    },
    month6value: {
      type: DataTypes.DOUBLE
    },
    month7date: {
      type: DataTypes.STRING(16)
    },
    month7value: {
      type: DataTypes.DOUBLE
    },
    month8date: {
      type: DataTypes.STRING(16)
    },
    month8value: {
      type: DataTypes.DOUBLE
    },
    month9date: {
      type: DataTypes.STRING(16)
    },
    month9value: {
      type: DataTypes.DOUBLE
    },
    month10date: {
      type: DataTypes.STRING(16)
    },
    month10value: {
      type: DataTypes.DOUBLE
    },
    month11date: {
      type: DataTypes.STRING(16)
    },
    month11value: {
      type: DataTypes.DOUBLE
    },
    month12date: {
      type: DataTypes.STRING(16)
    },
    month12value: {
      type: DataTypes.DOUBLE
    },
    main1name: {
      type: DataTypes.STRING(128)
    },
    main1value: {
      type: DataTypes.DOUBLE
    },
    main2name: {
      type: DataTypes.STRING(128)
    },
    main2value: {
      type: DataTypes.DOUBLE
    },
    main3name: {
      type: DataTypes.STRING(128)
    },
    main3value: {
      type: DataTypes.DOUBLE
    },
    main4name: {
      type: DataTypes.STRING(128)
    },
    main4value: {
      type: DataTypes.DOUBLE
    },
    main5name: {
      type: DataTypes.STRING(128)
    },
    main5value: {
      type: DataTypes.DOUBLE
    },
    turnover_rate: {
      type: DataTypes.DOUBLE
    },
    pe_ttm: {
      type: DataTypes.DOUBLE
    },
    pb: {
      type: DataTypes.DOUBLE
    },
    ps_ttm: {
      type: DataTypes.DOUBLE
    },
    total_share: {
      type: DataTypes.DOUBLE
    },
    float_share: {
      type: DataTypes.DOUBLE
    },
    total_mv: {
      type: DataTypes.DOUBLE
    },
    circ_mv: {
      type: DataTypes.DOUBLE
    },
    assets_turn: {
      type: DataTypes.DOUBLE
    },
    roe_yearly: {
      type: DataTypes.DOUBLE
    },
    type: {
      type: DataTypes.STRING(16)
    },
    p_change_min: {
      type: DataTypes.DOUBLE
    },
    p_change_max: {
      type: DataTypes.DOUBLE
    },
    net_profit_min: {
      type: DataTypes.DOUBLE
    },
    net_profit_max: {
      type: DataTypes.DOUBLE
    },
  }, {
    tableName: 'stock'
  });
