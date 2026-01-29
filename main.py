class ExpenseTracker:
    def __init__(self):
        self.records = []

    def add_record(self, name, amount):
        self.records.append({
            "name": name,
            "amount": amount
        })

    def show_records(self):
        return self.records

    def total_amount(self):
        total = 0
        for item in self.records:
            total += item["amount"]
        return total
tracker = ExpenseTracker()

tracker.add_record("ข้าวเที่ยง", 50)
tracker.add_record("กาแฟ", 30)

print(tracker.show_records())
print("ยอดรวม:", tracker.total_amount())
