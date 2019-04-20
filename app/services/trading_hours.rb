class TradingHours
  def self.last_trading_hour
    @current_time = Time.current.in_time_zone('EST')
    if weekend_closing_hours?
      return @current_time.beginning_of_week(:friday) + 16.hours
    elsif @current_time.on_weekday? && @current_time < market_open
      return (@current_time - 1.day).beginning_of_day + 16.hours
    elsif @current_time.on_weekday? && after_market_close?
      return @current_time.beginning_of_day + 16.hours
    else
      return @current_time
    end
  end

  def self.last_closing_time
    @current_time = Time.current.in_time_zone('EST')
    if weekend_closing_hours?
      return @current_time.beginning_of_week(:friday)
    elsif @current_time.on_weekday? && after_market_close?
      return @current_time.beginning_of_day + 16.hours
    else
      return (@current_time - 1.day).beginning_of_day
    end
  end
end

def weekend_closing_hours?
  @current_time.on_weekend? || @current_time.monday? && @current_time < market_open
end

def market_open
  @current_time.beginning_of_day + 9.hours + 30.minutes
end

def after_market_close?
  @current_time.hour >= 16
end
