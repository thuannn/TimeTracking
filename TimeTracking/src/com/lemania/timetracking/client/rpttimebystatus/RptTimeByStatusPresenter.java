package com.lemania.timetracking.client.rpttimebystatus;

import java.util.List;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.lemania.timetracking.client.CurrentUser;
import com.lemania.timetracking.client.LoggedInGatekeeper;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent;
import com.lemania.timetracking.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.place.NameTokens;
import com.lemania.timetracking.shared.LogProxy;
import com.lemania.timetracking.shared.service.EventSourceRequestTransport;
import com.lemania.timetracking.shared.service.LogRequestFactory;
import com.lemania.timetracking.shared.service.LogRequestFactory.LogRequestContext;

public class RptTimeByStatusPresenter extends Presenter<RptTimeByStatusPresenter.MyView, RptTimeByStatusPresenter.MyProxy> 
	implements RptTimeByStatusUiHandlers, LoginAuthenticatedHandler {
    
	private CurrentUser currentUser;
	
	interface MyView extends View , HasUiHandlers<RptTimeByStatusUiHandlers> {
		//
		public void initializeValues(int currentMonth, int currentYear);
		public void initializeTable();
		public void setLogData(List<LogProxy> logs);
	}
    
	
	@ContentSlot
    public static final Type<RevealContentHandler<?>> SLOT_RptTimeByStatus = new Type<RevealContentHandler<?>>();

    @NameToken(NameTokens.rptbystatus)
    @ProxyCodeSplit
    @UseGatekeeper(LoggedInGatekeeper.class)
    interface MyProxy extends ProxyPlace<RptTimeByStatusPresenter> {
    }
    
    
    @Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}
    

    @Inject
    RptTimeByStatusPresenter(
            EventBus eventBus,
            MyView view, 
            MyProxy proxy) {
        super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);
        
        getView().setUiHandlers(this);
    }
    
    protected void onBind() {
        super.onBind();
    }
    
    protected void onReset() {
        super.onReset();
        
        // Thuan
     	getView().initializeValues(currentUser.getCurrentMonth(), currentUser.getCurrentYear());
     	getView().initializeTable();
    }

    
    /*
     * */
    @Override
	public void onMonthChanged(int selectedYear, int selectedMonth) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		
		// initialize the Request Factory with the custom Request Transport which show the 
		// progress bar
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAllFullDetailByManager(selectedYear, selectedMonth, currentUser.getUserId().toString()).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response);
			}
		});
	}
    
    
    /*
     * */
    @ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		// Keep the info of current User
		this.currentUser = event.getCurrentUser();
	}
}