package com.lemania.timetracking.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.timetracking.client.place.DefaultPlace;
import com.lemania.timetracking.client.place.NameTokens;
import com.lemania.timetracking.client.place.TimeTrackingPlaceManager;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.presenter.HomePresenter;
import com.lemania.timetracking.client.presenter.EcolePresenter;
import com.lemania.timetracking.client.view.EcoleAddView;
import com.lemania.timetracking.client.view.EcoleView;
import com.lemania.timetracking.client.view.HomeView;
import com.lemania.timetracking.client.view.MainPageView;
import com.lemania.timetracking.client.presenter.EcoleAddPresenter;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		// Singletons
		install(new DefaultModule(TimeTrackingPlaceManager.class));
		
		// Set DefaultPlace to homepage
		bindConstant().annotatedWith(DefaultPlace.class).to(
				NameTokens.homepage);
		
		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		bindPresenter(HomePresenter.class, HomePresenter.MyView.class,
				HomeView.class, HomePresenter.MyProxy.class);

		bindPresenter(EcolePresenter.class, EcolePresenter.MyView.class,
				EcoleView.class, EcolePresenter.MyProxy.class);

		bindPresenter(EcoleAddPresenter.class, EcoleAddPresenter.MyView.class,
				EcoleAddView.class, EcoleAddPresenter.MyProxy.class);
	}
}