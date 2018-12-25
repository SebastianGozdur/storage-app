var Validators = {
    isItemValid: function(item) {
        console.log(item);
        if(item.name == null) {
            return false;
        } else if(item.quantity == null || item.quantity == 0) {
            return false;
        } else if(item.related_price == null || item.related_price == 0) {
            return false;
        }
        return true;
    }
};

module.exports = Validators;