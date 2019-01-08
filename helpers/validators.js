var Validators = {
    isItemValid: function(item) {
        if(item.name == null) {
            return false;
        } else if(item.quantity == null || item.quantity == 0) {
            return false;
        } else if(item.related_price == null || item.related_price == 0) {
            return false;
        }
        return true;
    },

    isNameValid: function(item) {
        if(item.name == null) {
            return false;
        }
        return true;
    },

    isQuantityValid: function(item) {
        if(item.quantity == null) {
            return false;
        }
        return true;
    },

    isRelatedPriceValid: function(item) {
        if(item.related_price == null) {
            return false;
        }
        return true;
    }
};

module.exports = Validators;